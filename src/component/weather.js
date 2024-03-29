import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weather.css'

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [bgClass, setBgClass] = useState('');

  const API_KEY = 'b9f49ed5d47e9a107b4ec3f409ed1074';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&lang=en`;

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`${API_URL}&q=${city}`);
      setWeather(response.data);
      setBgClass(getWeatherBackground(response.data.weather[0].main));
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === '') return;
    fetchWeatherData();
  };

  const getWeatherBackground = (weatherMain) => {
    switch (weatherMain) {
      case 'Clear':
        return 'clear';
      case 'Clouds':
        return 'clouds';
      case 'Rain':
        return 'rain';
      case 'Thunderstorm':
        return 'thunderstorm';
      default:
        return 'default';
    }
  };

  useEffect(() => {
    setBgClass(getWeatherBackground(weather?.weather[0].main));
  }, [weather]);

  return (
    <div className={`weather-app ${bgClass}`}>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className='button' type="submit">Get Weather</button>
      </form>
      {weather && (
        <div className='container'>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Description: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed}Km/h</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;