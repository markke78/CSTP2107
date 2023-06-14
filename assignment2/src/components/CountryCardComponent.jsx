/* eslint-disable react/prop-types */
import {Card, CardMedia, Box, Grid, CardContent, Typography,Button} from '@mui/material';
import { Link } from 'react-router-dom'




// eslint-disable-next-line react/prop-types
export default function CountryCardComponent({data}) {
    console.log(data[0]);
 

  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{position:'relative', display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap',gap:'px 50px', padding:'px 50px'}}>
                {data.map((country) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <Grid item xs={2} sm={4} md={4} >
                            <Card sx={{ width: '350px', height:'300px', borderRadius:'20px', position:'relative', display:'flex', justifyContent:'center', alignItems:'flex-start',  background:'rgba(255,255,255,0.5)' }} >
                            
                                <CardMedia 
                                    sx={{position:'absolute', border:'solid grey', borderRadius: '100px', height: 200, maxWidth: 200, marginTop:'10px'  }}
                                    component="img"
                                    alt="green iguana"
                                    image={country.flags.png}                              

                                    />

                                <CardContent sx={{position:'absolute', top:'200px', width:'100%', padding:'20px 30px', textAlign:'center'}}>
                                    <Typography gutterBottom variant="h10">
                                        {country.name.common}


                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{padding:'10px'}}>
                                        <Button variant="outlined" color="error" >
                                            <Link to={`/country/${country.name.common}`}>
                                                More Info
                                            </Link>
                                        </Button>
                                    </Typography>
                                </CardContent>
                                
                            </Card>
                        </Grid>
                    )
                })}


            </Grid>

        </Box>

        

                
    </div>
  )
}
