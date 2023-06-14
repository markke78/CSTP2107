import { useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from 'react'
import { Card, CardContent, CardMedia, Typography, Button, Divider, LinearProgress,} from '@mui/material';

export default function CountryDetailPage() {
    const{countryName} = useParams();
    const navigate = useNavigate();
    
    const [countryData, setCountryData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        fetchCountryData();
    }, [countryName]);

    const fetchCountryData = async () => {
      setLoading(true);
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      const data = await response.json();
      setCountryData(data);
      setLoading(false);
    }

    const handleGoBack = () => {
    navigate('/');
    }

  return loading ?  <LinearProgress />:<>

    <Divider />
  
    <Card sx={{ width: 500}}>
        <CardMedia sx={{width:200, margin:'auto', marginTop:'10px', border:'solid grey'}}
            component="img"
            alt="green iguana"
            width="300"
            image={countryData[0]?.flags?.png}

        />
        <CardContent>

        
        <Typography gutterBottom variant="h7">
          {countryName}         
        </Typography>
        <br/>
        <Typography gutterBottom variant="h7">
          Capital City: {countryData[0]?.capital}        
        </Typography>
                <br/>
        <Typography gutterBottom variant="h7">
          Population: {countryData[0]?.population}        
        </Typography>
                        <br/>
        <Typography gutterBottom variant="h7">
        <hr/>
          {countryData[0]?.flags?.alt}        
        </Typography>
        </CardContent>
        <Button variant="outlined" onClick={handleGoBack} sx={{marginBottom:'5px'}}>
          Go Back!
        </Button>

    </Card>
   
    </>

  
}
