import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import './Home.css'
const Map = (props) => {

  const [dailyConfirmedCases,setDailyConfirmedCases]=useState([]);
  const [dates,setDates]=useState([]);
  
  useEffect(() => {
    const covidDataFetch=async()=>
  {
    const API_CALL='https://data.covid19india.org/data.json';

    const response=await fetch(API_CALL);

    const data=await response.json();
    const dailyConfirmedCasesArr=[];
    const datesArr=[]
    props.getVaccinated(data.tested[523].totaldosesprovidedtostatesuts)

    for(const key in data.cases_time_series)
    {
      datesArr.push(data.cases_time_series[key].date);
      dailyConfirmedCasesArr.push(data.cases_time_series[key].dailyconfirmed)
    }

    setDailyConfirmedCases(dailyConfirmedCasesArr);
    setDates(datesArr);
  }
  covidDataFetch();
  }, [])
  return (
    <div className='map_container'>

      <Plot
      data={[
        {
            x: dates,
          y: dailyConfirmedCases,
          type: 'scatter',
          mode: 'lines',
          marker: {color: 'orange'},
        },
      ]}
      layout={ {width: 900, height: 500, title: 'Cases'} }
    />
    </div>

  )
}

export default Map