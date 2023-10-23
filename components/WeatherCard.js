import React from "react";
import sunny from "../assets/Sunny.svg";
import Cloudy from "../assets/Cloudy.svg";
import PartlyCloudy from "../assets/PartlyCloudy.svg";
import Rainy from "../assets/Rainy.svg";


function WeatherCard(props) {
  const icon = ()=>{
    switch(props.data.forecast){
      case "Rainy":
        return <img className="card-img-top" src = {Rainy} alt="Card image cap" id="icon"/>
      case "PartlyCloudly":
        return <img className="card-img-top" src = {PartlyCloudy} alt="Card image cap" id="icon"/>
      case "Cloudy":
        return <img className="card-img-top" src = {Cloudy} alt="Card image cap" id="icon"/>
      default:
        return <img className="card-img-top" src = {sunny} alt="Card image cap" id="icon"/>
    }
  };

  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {images[forecast]} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{props.data.city}</h3>
            <h5 className="card-text">{props.data.temperature}</h5>
            <h5 className="card-text">{props.data.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
module.exports = WeatherCard;