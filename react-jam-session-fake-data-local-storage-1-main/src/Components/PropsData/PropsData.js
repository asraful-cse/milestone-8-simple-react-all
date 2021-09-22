import React, { useState } from 'react';

const PropsData = (props) => {


    const handleBtnClick = () => {
        
        localStorage.setItem('datas', 'awsome');
        alert('data added succesfully')
    }
    const cat = localStorage.getItem('datas');
    console.log(cat);

    const data = props.fake;
    return (
        <div className = 'col-md-4 border'>
           <h5>{data.title}</h5>
           <p>{data.body}</p>
           <button className="btn btn-primary" onClick={handleBtnClick}>wow button</button>
        </div>
    );
};

export default PropsData;