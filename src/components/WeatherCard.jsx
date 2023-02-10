import React, { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import  {Trash2Fill}  from 'react-bootstrap-icons';

class WeatherCard extends Component {
  handleDelete = (index) => {
    const { onDelete } = this.props;
    onDelete(index);
  };

  render() {
    const { weatherReport, index } = this.props;
    return (
    <Col className='cardCol'>
      <Card className="my-4 weather-card">
        <Card.Img
          style={{width:'35%'}}
          src={`http://openweathermap.org/img/wn/${weatherReport.weather[0].icon}.png`}
          alt="weather-icon"
        />
        <Card.Body>
          <Card.Title><h3>{weatherReport.name}</h3></Card.Title>
          <Card.Subtitle>{weatherReport.weather[0].description}</Card.Subtitle>
          <Card.Text>
            <div className="weather-info">
              <h1 className='temp'>{weatherReport.main.temp.toFixed(1)}°C</h1>
              </div>
              <p className="feels-like mt-3 ml-2">Feels like {weatherReport.main.feels_like.toFixed(1)}°C</p>
            
          </Card.Text>
          <Button onClick={() => this.handleDelete(index)} variant="danger"><Trash2Fill /></Button>
        </Card.Body>
      </Card>
      </Col>
    );
  }
}

export default WeatherCard;
