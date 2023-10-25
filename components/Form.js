import React from 'react';
import {useState} from 'react';

function Form ({location, setLocation}) {
    <div className = "form">
    <form onSubmit={handleSubmit}>
        <label className = "city">City:
            <input 
            onChange={(e) => typedLocation(e.target.value)}
            value={typedLocation}
            type="text"
            />
        </label>
        <button 
            className = "btn btn-primary" 
            type="submit"
        >Submit</button>
    </form>
</div>
}



module.exports = Form;