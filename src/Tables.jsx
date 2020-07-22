import React from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Countries from './Countries';
import Styles from './Table.module.css';


function searching(term){
    return function(x){
        return x.Country.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class Tables extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            countriesData:[],
            term:"",
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(event){
        this.setState({term : event.target.value});
    }

    state={
        countriesData : [],
        global: [],
        currentDate: null,
        loading: true,
    }

    async componentDidMount(){
        
        const res = await axios.get(" https://api.covid19api.com/summary");
        
        this.setState({countriesData: res.data.Countries});
        this.setState({global: res.data.Global});
        this.setState({currentDate: res.data.Date});
        this.setState({loading: false});
    }

    render(){
        const {data, country} = this.state;

        const date = new Date().getFullYear()

        if(this.state.loading){
            return(
                <h1>Loading...</h1>
            )
        }

        return(
            <>
            <div className='header'>
                <p>Covid-<span className={Styles.span}>19</span></p>
            </div>
            <div className={Styles.search}>
                <input type='text' placeholder='Search...' onChange={this.onChange}/>
            </div>
                <div>
                    <TableContainer className={Styles.container}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className='Chead'>Countries</TableCell>
                                    <TableCell className='nchead'>Confirmed</TableCell>
                                    <TableCell className='nrhead'>Recovered</TableCell>
                                    <TableCell className='ndhead'>Deaths</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.countriesData.filter(searching(this.state.term)).map(country => (
                                    <Countries countriesData={country} key={country.Country}/>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <div className='footer'>
                <p>Copyright &copy; {date} Covid-19</p>
            </div>
            </>
        )
    }
    
}

export default Tables;