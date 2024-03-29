import React, { useState } from 'react';
import Weather from './component/weather';
import './App.css';

const App = () => {
  // const [city, setCity] = useState('');

  // const handleChange = (e) => {
  //   setCity(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can add validation here to check if the city is not empty
  // };

   return (
  //   <div className="app">
  //     <h1>Weather App</h1>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         placeholder="Enter city name"
  //         value={city}
  //         onChange={handleChange}
  //       />
  //       <button type="submit">Get Weather</button>
  //     </form>
  //     <Weather city={city} />
  //   </div>
       <Weather/>
  );
};

export default App;
