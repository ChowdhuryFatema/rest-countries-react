import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Country.css';


const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])


    const handleVisitedCountries = country => {
        // console.log('add this to your visited country')
        console.log(country)
        setVisitedCountries([...visitedCountries, country])
    }

    const handleVisitedFlags = flag => {
        setVisitedFlags([...visitedFlags, flag]);
    }

    return (
        <div>
            <h2>Countries: {countries.length}</h2> 
           <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul className="country-name-list">
                    {
                        visitedCountries.map(country => <li key={country.cca3}>Name: {country.name.common}</li>)
                    }
                </ul>
                <div>
                    {
                        visitedFlags.map(flag => <img style={{width: '100px',height: '60px', margin: '10px'}}

                            src={flag.flags.png} key={flag.cca3}></img>)
                    }
                </div>
           </div>
            <div className="country-container">
                {
                    countries.map(country => <Country 
                    country={country} 
                    key={country.cca3}
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlags={handleVisitedFlags}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;