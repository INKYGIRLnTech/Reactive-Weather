import React from 'react';
// Import data and WeatherCard here
import cities from './data';
import WeatherCard from './components/WeatherCard';
import {useState} from 'react';
import Location from './components/Location';


function App() {
    const [location, setLocation] = useState("New York City")
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                <h3>Your Location's Weather</h3>
                <Location data ={cities} location={location} setLocation={setLocation} />
                {cities.map((citiesInfo) =><WeatherCard data ={citiesInfo} />)}
                


            </div>
            
        </>
    )
}

export default App;