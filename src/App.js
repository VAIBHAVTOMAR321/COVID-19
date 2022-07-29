import Header from './component/Header';
import Home from './pages/Home';
import About from './pages/About';
import Map from './pages/Map';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import './App.css'
import { useState } from 'react';

function App()
{
  const [vaccData,setVaccData]=useState(0);
  const getVaccinated=(totalVacc)=>
  {
    setVaccData(totalVacc)
  }
  return (
    <BrowserRouter>
     <div className='header_title'>
       <h1>COVID-19</h1>
     </div>
     <Header> </Header>
     <Routes>
     <Route path="/" exact element={<Home totalVacc={vaccData} />} />
     <Route path="about" exact element={<About/>} />
     <Route path="map" exact element={<Map getVaccinated={getVaccinated}/>} />
     <Route path="*" exact element={<Error/>} />

      </Routes>
    </BrowserRouter>
 
  );
}
export default App;


