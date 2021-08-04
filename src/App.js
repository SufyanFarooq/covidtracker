import React, { useState, useEffect } from 'react';
import './App.css';
import Charts from './charts/Charts';
import Nav from './components/appBar'
import {fetchData} from './api/Api'; 
import GlobalStats from './components/GlobalStats'
function App() {
  let [country, setCountry]=useState("");
  let [caseData, setCaseData]=useState({
    confirm:{value:0},
    death:{value:0},
    recover:{value:0}
  });
  useEffect(() => {
    async function dataFetched() {
      const fetchedData = await fetchData();

      setCaseData(fetchedData);
      setCountry("global");
    }
    dataFetched();
  }, []);

  const handleCountryChange=async(country)=>{
    const fetchDataGlobal= await fetchData();
    if(country==="global"){
      setCaseData(fetchDataGlobal);
      setCountry("global");
    }else{
      const countryData= await fetchData(country);
      setCaseData(countryData);
      setCountry(countryData);
    }
  }
  console.log(caseData)
  
  return (
    <div>
   <Nav handleCountryChange={handleCountryChange}/>
   <GlobalStats data={caseData}/>
<Charts caseData={caseData} country={country} />
    </div>
  );
}

export default App;
