//import { getAllByPlaceholderText } from '@testing-library/react'
import React,{useState,useEffect} from 'react'
import './Home.css'
const Home = (props) => {
 
  const [confirmedCases,setConfirmedCases]=useState(0);
  const [recoveredCases,setRecoveredCases]=useState(0);
  const [deathCases,setDeathCases]=useState(0);
 
  useEffect(() => {
    const covidDataFetch=async()=>
  {
    const API_CALL='https://covid19.mathdro.id/api';

    const response=await fetch(API_CALL);

    const data=await response.json();

    console.log(data);

    setConfirmedCases(data.confirmed.value)
    setDeathCases(data.deaths.value);
    // setRecoveredCases(data.recovered.value)
    setRecoveredCases(41585711);
  }
    covidDataFetch();
  }, [])
  

  
  return (
    <div>
    <div className='home_container'>
      <div className='home_container_leftbox'>

      <div className='home_box'>
        <h3>Total Cases</h3>
        <h4>{confirmedCases}</h4>
      </div>

      <div className='home_box'>
        <h3>Recovered</h3>
        <h4>{recoveredCases}</h4>
      </div>

      <div className='home_box'>
        <h3>Death</h3>
        <h4>{deathCases}</h4>
      </div>
      
      </div>
      <div className='home_container_rightbox'>
      <div className='home_box'>
        <h3>Vaccinated</h3>
        <h4>{props.totalVacc}</h4>
      </div>
        <h2>PLEASE WEAR MASK!</h2>
        <bold><div><p>The health system is buckling under demand, but we're helping families reach vaccinations as we work in close contact with health workers who need masks, COVID-19 test kits, and disinfectant to save lives and stay safe.</p></div></bold>
        

      </div>
    </div>
    </div>
  )
}

export default Home