import { useState } from "react";
import './Country.css'


const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
    const { name, flags, area } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country-info ${visited && 'visited'}`}>
            <div>
                <img src={flags.png} alt="" />
                <h3 style={{ color: visited ? 'purple' : 'black' }}>Name: {name.common}</h3>
                <p>area: {area}</p>


                <button onClick={() => handleVisitedFlags(country)}>Visited Flag</button>
                <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
                <br />
                <button onClick={handleVisited}>{visited ? 'visited' : 'Going'}</button><br />
                {visited ? 'I have visited this country' : ''}
            </div>
        </div>
    );
};

export default Country;