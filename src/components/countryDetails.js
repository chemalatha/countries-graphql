import React,{Component} from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const client = new ApolloClient({
    uri:'https://countries.trevorblades.com'
})
const COUNTRY_QUERY=gql`
query country($code:String)
{
    country(code: $code){
        name
        native
        currency
        continent{
            name
        }
    }
  }`;
class CountryDetails extends Component{
    render(){
        console.log(this.props.match.params)
        return(
            <React.Fragment>
            <Query client={client} query={COUNTRY_QUERY} variables={{code:this.props.match.params.code}}>
                {({loading,error,data})=>{
                    if(loading) return <p>Loading...</p>
                    if(error) return <p>Error</p>
                    console.log(data)
                    return(
                        
                        <div className="jumbotron">
                            <img src={`https://www.countryflags.io/${this.props.match.params.code}/shiny/64.png`} alt="flag" />
                            <div>Name:<span>{data.country.name}</span></div>
                            <div>Native:<span>{data.country.native}</span></div>
                            <div>Currency:<span>{data.country.currency}</span></div>
                            <div>Continent<span>{data.country.continent.name}</span></div>
                        </div>
                    )
                }}

            </Query>
        </React.Fragment>
        )
    }

}

export default CountryDetails;