import React, { useEffect, useState } from 'react';
import FakeData from '../../FakeData/FakeData';
import PropsData from '../PropsData/PropsData';
const FakeDataLoad = () => {
    
    const [memory, setMemory] = useState([]);


    useEffect(() => {
        setMemory(FakeData)
    }, []);

    return (
        <div>
            <h1>Fake data load </h1>
            <div className="row">
                {
                    memory.map(data => <PropsData fake={data}></PropsData>)
                }
            </div>
        </div>
    );
};

export default FakeDataLoad;