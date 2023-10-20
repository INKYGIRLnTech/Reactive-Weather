import React from "react";
import sunny from "../assets/Sunny.svg";
import Cloudy from "../assets/Cloudy.svg";
import PartlyCloudy from "../assets/PartlyCloudy.svg";
import Rainy from "../assets/Rainy.svg";


function WeatherCard({data}) {
  const {city, temperature, forecast} = data;

  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {images[forecast]} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{city}</h3>
            <h5 className="card-text">{temperature}</h5>
            <h5 className="card-text">{forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
module.exports = WeatherCard;