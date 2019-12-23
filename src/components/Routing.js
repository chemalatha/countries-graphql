import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CountryList from './countryList';
import CountryDetails from './countryDetails';

const Routing = ()=>{
    return(
        <BrowserRouter>
            <Route exact path="/" component={CountryList}/>
            <Route exact path="/country/:code" component={CountryDetails}/>
        </BrowserRouter>
    )
}

export default Routing;