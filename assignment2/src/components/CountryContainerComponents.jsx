import { useEffect, useState } from 'react'
import CountryCardComponent from './CountryCardComponent'

export default function CountryContainerComponents() {
    const [countriesData, setCountriesData] = useState([]);
    useEffect(() => {
        fetchCountriesData();
    }, []);

    const fetchCountriesData = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountriesData(data);
    }

  return (
    <div><CountryCardComponent data = {countriesData}/></div>
  )
}
