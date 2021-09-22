
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = () => {
    const [coutries, setCountries] = useState([]);


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON?fbclid=IwAR2I0FWfckuDaEBVBPHOKRhh4E4BQUyU1pZ9xMvsXkCNXD8wvcI-mq7tPUg')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Total Countries : {coutries.length}</h1>
            <div className="card-style">
                {
                    coutries.map(country => <Country
                        key={country.name} // uniqe key ditei hibe na hole warning dekhabe..
                        country={country}
                    //  flag={country.flag}
                    //  name={country.name}
                    //  population={country.population}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;