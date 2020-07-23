import React from 'react';
import { Cards, Charts, Country} from './Components';
import Styles from './App.module.css';
import { fetchData } from './Api';
import Link from './Link';
import IndiaLink from './IndiaLink';
import CityLink from './CityLink';
import { Card, CardContent, Typography, Grid, Paper } from '@material-ui/core';

class Router extends React.Component {

    state={
        data: {},
        country: "",
    }

    async componentDidMount(){
        const fetchdData = await fetchData();
        
        this.setState({ data : fetchdData });
    
    }

    countryChange = async (country) => {
        
        const fetchdData = await fetchData(country);
        this.setState({ data : fetchdData, country:country });
    }

    render(){
        const {data, country} = this.state;

        const date = new Date().getFullYear()

        return(
            <>
            
            <div className='header'>
                <p>Covid-<span className={Styles.span}>19</span></p>
            </div>

            <div className='mcontainer'>
                <Country countryChange={this.countryChange}/>
                <IndiaLink/>
                <Cards data={data}/>
                <Link/>
                <Charts data={data} country={country}/>
            </div>

            <div className='footer'>
                <p>Copyright &copy; {date} Covid-19</p>
            </div>
            
            </>
        )
    }
}

export default Router;