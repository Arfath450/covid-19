import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CountUp from 'react-countup';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

class Countries extends React.Component{

    render(){
        const { countriesData } = this.props;

        return(
            <>
            <TableRow>
                <TableCell className='country'>{countriesData.Country}</TableCell>
                <TableCell className='confirm'> <ArrowUpwardIcon/>
                <CountUp
                        start={0}
                        end={countriesData.NewConfirmed}
                        separator=","
                        duration={2.5}
                    /><br/>
                <CountUp
                        start={0}
                        end={countriesData.TotalConfirmed}
                        separator=","
                        duration={2.5}
                    />
                    </TableCell>

                <TableCell className='recover'> <ArrowUpwardIcon/>
                <CountUp
                        start={0}
                        end={countriesData.NewRecovered}
                        separator=","
                        duration={2.5}
                    /><br/>
                <CountUp
                        start={0}
                        end={countriesData.TotalRecovered}
                        separator=","
                        duration={2.5}
                    />
                    </TableCell>

                <TableCell className='death'> <ArrowUpwardIcon/>
                <CountUp
                        start={0}
                        end={countriesData.NewDeaths}
                        separator=","
                        duration={2.5}
                    /><br/>
                <CountUp
                        start={0}
                        end={countriesData.TotalDeaths}
                        separator=","
                        duration={2.5}
                    />
                    </TableCell>

            </TableRow>
            </>
        )
    }

}

export default Countries;