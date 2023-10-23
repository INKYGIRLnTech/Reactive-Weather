import React from 'react';
import {useState} from 'react';

function Location({data, location, setLocation}) {
    const locationData = data.find(({city})=>city === location)
    return(
    <div className='card'>
        <div class="card-body">
            <h3 className='card-title'>{locationData.city}</h3>
            <h5 className='card-text'>{locationData.temperature}</h5>
            <h5 className='card-text'>{locationData.forecast}</h5>
        </div>
    
    </div>
    )
};

module.exports = Location;