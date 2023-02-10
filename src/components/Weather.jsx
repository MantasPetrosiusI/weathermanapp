import React from 'react';
import {Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import WeatherCard from './WeatherCard';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherReports, setWeatherReports] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d7ddbbd2298b5af57c2acd97ec250ee8&units=metric`
      );
      if (response.ok) {
        const data = await response.json();
        setWeatherReports([...weatherReports, data]);
        setCity('');
      }
    } catch (error) {
      console.error(error);
    }
  };
  function onDelete(index) {
  const updatedWeatherReports = [...weatherReports];
  updatedWeatherReports.splice(index, 1);

  setWeatherReports(updatedWeatherReports);
}

  return (
    <>
        <Col md={8}>
          <Form className="d-flex justify-content-center my-2" onSubmit={handleSearch}>
            <Form.Group className="mb-0">
              <Form.Control
                type="text"
                style={{ height: '50px' }}
                placeholder="Search city.."
                value={city} required
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
            <Button variant="dark" type="submit" className="ml-1">
              Search
            </Button>
          </Form>
        </Col>
        
      {weatherReports.map((weatherReport, index) => (
        <WeatherCard key={index} weatherReport={weatherReport} onDelete={onDelete}/>
      ))}
      </>
  );
};

export default Weather;