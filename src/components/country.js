import React from 'react';
import {Link} from 'react-router-dom';

const Country = ({country})=>{
    let ccode = (country.code).toLowerCase();
    return(
            <div style={{border:"1px solid black"}}className="col-sm-6">
                <img src={`https://www.countryflags.io/${ccode}/shiny/64.png`} alt="flag" />
                {country.name}
                <Link style={{float:'right'}}to={`/country/${country.code}`}>Details</Link>
            </div>

    )
}

export default Country;