import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props.country);
    // destructuring.................
    const {flag, name, population } = props.country
    return (
        <div className="country-blog"> 
            <img  src={flag} alt="" />
            <h2>Country Name: {name}</h2>
            <h5>Country Population : {population}</h5>
        </div>
    );
};

export default Country;