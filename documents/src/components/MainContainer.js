import { useState, React, useEffect } from 'react';

import axios from 'axios';

import LineGraph from './LineGraph';

import Cards from './Cards';

import "./style.css";



function MainContainer (props) {
  
  useEffect( () => {

    const url = `https://api.covid19api.com`;
    
    axios.get(`${url}/summary`)
    .then(response => {
    
    setUseCountry(response.data)
       
    } )
    .catch(error => console.log(error) )
    
  
  
  }, [] );

  
 

  const formatDate = ( time ) => {

    const d = new Date(time);

    const year = d.getFullYear();

    const month = `0${d.getMonth() + 1}`.slice(-2);

    const date = d.getDate();

    return `${year}-${month}-${date}`;
  };

  const countryHandler = (e) => {

      (setCountry( e.target.value ));

      const d = new Date();

      const to = formatDate(d);

      const from = formatDate(d.setDate( d.getDate()-7 ));

      
      getCoronaReportbyDate( e.target.value,from, to );


  };

  useEffect( () => {

    const url = `https://api.covid19api.com`;
    
    axios.get(`${url}/summary`)
    .then(response => {
  
        setTotalConfirmed(response.data.Global.TotalConfirmed);
        setnewDeaths(response.data.Global.NewDeaths);
        setTotalDeaths(response.data.Global.TotalDeaths);
        setDate(response.data.Global.Date)
        setDailyConfirmed(response.data.Global.NewConfirmed);
        setDailyRecovered(response.data.Global.NewRecovered);
        setTotalRecovered(response.data.Global.TotalRecovered);
        
      
      
  
  
      console.log(response)} )
    .catch(error => console.log(error) )
  
    
    
  
  
  }, [] );

  

  const [totalConfirmed, setTotalConfirmed] = useState(0);
  
  const [newDeaths, setnewDeaths] = useState(0);
  
  const [totalDeaths, setTotalDeaths] = useState(0);

  const [date, setDate] = useState();

  const [dailyConfirmed, setDailyConfirmed] = useState();

  const [totalRecovered, setTotalRecovered] = useState();

  const [dailyRecovered, setDailyRecovered] = useState();

  const [useCountry, setUseCountry] = useState({});

  const [country, setCountry] = useState("");

  const [days, setDays] = useState();

  const [coronaCounter, setCoronaCounter] = useState([]);

  

  const getCoronaReportbyDate = ( countrySlug, from, to ) => {

  

    const url = `https://api.covid19api.com`;

    axios.get(`${url}/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z` )
    .then(response => {
      
      const coronaCount = response.data.map( d => d.Cases );

     const covidDetails = useCountry.Countries.find(country => country.Slug === countrySlug);

      setCoronaCounter(coronaCount)
      setTotalConfirmed(covidDetails.TotalConfirmed)
      setnewDeaths(covidDetails.NewDeaths)
      setTotalDeaths(covidDetails.TotalDeaths)
    }, )
    .catch(error => console.log(error));

  
  };




  return (
    
    
    <div className='justify-center'>

<Cards
      totalConfirmed={totalConfirmed}
      newDeaths={newDeaths}
      totalDeaths={totalDeaths}
      country={""}
      date={date}
      dailyConfirmed={dailyConfirmed}
      dailyRecovered={dailyRecovered}
      totalRecovered={totalRecovered}

      />  
  
  <p className='p-normal justify-center text-center'>Choose your Country</p>
  
  <select value={country} onChange={countryHandler} className="p-normal">
    
      { 
      
      useCountry.Countries && useCountry.Countries.map( country => 
        <option key={country.Slug} value={country.Slug}> {country.Country} </option> )

      
      }

    

  </select>

  <LineGraph
  
  Deaths={totalDeaths}
  Confirmed={totalConfirmed}
  />
 
        
    </div>
  )
};

export default MainContainer;