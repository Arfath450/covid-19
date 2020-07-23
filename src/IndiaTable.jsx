import React, { Component } from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import StateTable from './StateTable';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Styles from './India.module.css'; 
import CountUp from 'react-countup';
import { Card, CardContent, Typography, Grid, Paper} from '@material-ui/core';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import Total from './Total.module.css'
import './index.css';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const url="https://api.covid19india.org/data.json";

const searching = (term) => {
        return function(x){
            return x.state.toLowerCase().includes(term.toLowerCase()) || !term;
        }
}

class IndiaTable extends React.Component{

    constructor(props){
        super(props);
        this.state={
            states:[],
            total:[],
            graph:[],
            term:"",
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) =>{
        this.setState({term: e.target.value});
    }

    async componentDidMount(){

        const res = await axios.get(url);
        console.log(res)
    
        this.setState({states: res.data.statewise});
        this.setState({total: res.data.statewise[0]});
        this.setState({graph: res.data.cases_time_series});
        this.setState({loading:false});
        
    }

    render(){
    
        const date = new Date().getFullYear()

        if(this.state.loading){
            return <h1>loaging...</h1>
        }
        
        return(
            <>
    
            <div className='header'>
                <p>Covid-<span className={Styles.span}>19</span></p>
            </div>

            <div className='search'>
                <input type='text' placeholder='Search...' onChange={this.onChange}/>
            </div>

            <div className={Total.container}> 
                    <div className={Total.cgrid}>
                        <Typography className={Total.confirmed}>Confirmed</Typography>
                        <Typography className={Total.dconfirmed}>▲{this.state.total.deltaconfirmed}</Typography>
                        <Typography className={Total.tconfirmed}>{this.state.total.confirmed}</Typography>
                        <Sparklines data={this.state.graph.map((chart) => chart.dailyconfirmed)} height={180} margin={8}>
                            <SparklinesLine color="red" style={{ fill: "red" }} />
                            <SparklinesSpots size={4} style={{stroke: 'red', fill: "red" }} />
                        </Sparklines>
                    </div>
                
                    <div className={Total.agrid}>
                        <Typography className={Total.active}>Active</Typography>
                        <Typography className={Total.tactive}>_</Typography>
                        <Typography className={Total.tactive}>{this.state.total.active}</Typography>
                        <Typography className={Total.tactive}>_</Typography>
                    </div>

               
                    <div className={Total.rgrid}>
                        <Typography className={Total.recovered}>Recovered</Typography>
                        <Typography className={Total.drecovered}>▲{this.state.total.deltarecovered}</Typography>
                        <Typography className={Total.trecovered}>{this.state.total.recovered}</Typography>
                        <Sparklines data={this.state.graph.map((chart) => chart.dailyrecovered)} height={180} margin={8}>
                            <SparklinesLine color="green" style={{ fill: "green" }}  />
                            <SparklinesSpots size={4} style={{stroke: 'green', fill: "green" }} />
                        </Sparklines>
                    </div>

                    <div className={Total.dgrid}>
                        <Typography className={Total.deaths}>Deaths</Typography>
                        <Typography className={Total.ddeaths}>▲{this.state.total.deltadeaths}</Typography>
                        <Typography className={Total.tdeaths}>{this.state.total.deaths}</Typography>
                        <Sparklines data={this.state.graph.map((chart) => chart.dailydeceased)} height={180} margin={8}>
                            <SparklinesLine color="grey" style={{ fill: "grey" }}  />
                            <SparklinesSpots size={4} style={{stroke: 'grey', fill: "grey" }} />
                        </Sparklines>
                    </div>       
            </div>
                
                <TableContainer className='container'>
                    <Table className={Styles.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell className='shead'>States</TableCell>
                                <TableCell className='chead'>Confirmed</TableCell>
                                <TableCell className='ahead'>Active</TableCell>
                                <TableCell className='rhead'>Recovered</TableCell>
                                <TableCell className='dhead'>Deaths</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.states.filter(searching(this.state.term)).map(States => (
                                <StateTable states={States} key={States.state}/>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            

            <div className='footer'>
                <p>Copyright &copy; {date} Covid-19</p>
            </div>
            </>
        )

    }
}

export default IndiaTable;