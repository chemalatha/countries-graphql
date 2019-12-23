import React from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import Country from './country';

const client = new ApolloClient({
    uri:'https://countries.trevorblades.com'
})
const COUNTRIES_QUERY=gql`query {
    countries:countries{
      code
      name
      continent{
        code
      }
    }
  }`;
const CountryList = ()=>{
    const renderList = (countries)=>{
        return countries.map((country)=>{
            return(
                <Country key={country.code} country={country}/>
            )
        })
    }
    return(
        <React.Fragment>
            <Query client={client} query={COUNTRIES_QUERY}>
                {({loading,error,data})=>{
                    if(loading) return <p>Loading...</p>
                    if(error) return <p>Error</p>
                    return(
                        <div className="container-fluid">
                            <div className="row">
                            <div>{renderList(data.countries)}</div>
                            </div>
                        </div>
                    )
                }}

            </Query>
        </React.Fragment>
        
    )
}

export default CountryList;