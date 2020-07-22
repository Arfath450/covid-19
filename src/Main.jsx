import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Styles from './Cell.module.css';
import CountUp from 'react-countup';

class Main extends React.Component{

    render(){
        const { dist } = this.props;
        return(
            <>
            <TableRow>
            <TableCell className={Styles.district}>{dist.district}</TableCell>

                <TableCell className={Styles.confirmed}>🡹
                    <CountUp 
                    className={Styles.deltc}
                        start='0'
                        end={dist.delta.confirmed}
                        separator=","
                        duration={1}
                    /><br/>
                    <CountUp 
                        start='0'
                        end={dist.confirmed}
                        separator=","
                        duration={1}
                    />
                </TableCell>

                <TableCell className={Styles.active}> 
                    <CountUp
                        start='0'
                        end={dist.active}
                        separator=","
                        duration={1}
                    />
                </TableCell>

                <TableCell className={Styles.recovered}>🡹
                    <CountUp
                    className={Styles.deltr}
                        start='0'
                        end={dist.delta.recovered}
                        separator=","
                        duration={1}
                    /><br/>
                    <CountUp
                        start='0'
                        end={dist.recovered}
                        separator=","
                        duration={1}
                    />
                </TableCell>

                <TableCell className={Styles.deaths}>🡹
                    <CountUp
                    className={Styles.deltd}
                        start='0'
                        end={dist.delta.deceased}
                        separator=","
                        duration={1}
                    /><br/>
                    <CountUp
                        start='0'
                        end={dist.deceased}
                        separator=","
                        duration={1}
                    />
                </TableCell>
            </TableRow>
            </>
        )
    }
}

export default Main;