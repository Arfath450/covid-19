import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Styles from './India.module.css';
import CountUp from 'react-countup';
import {Grid as GridTable, TableFixedColumns} from '@devexpress/dx-react-grid-material-ui';

class StateTable extends React.Component{

    render(){

        const { states } = this.props;
        return(
            <>
            <TableRow>
                    <TableCell className='state'>{states.state}</TableCell>
                    <TableCell className='confirmed'>🡱
                <CountUp
                        start={0}
                        end={states.deltaconfirmed}
                        separator=","
                        duration={2.5}
                    /><br/>
                
                    <CountUp
                        start={0}
                        end={states.confirmed}
                        separator=","
                        duration={2.5}
                    />
                </TableCell>

                <TableCell className='active'>
                
                    <CountUp
                        start={0}
                        end={states.active}
                        separator=","
                        duration={1}
                    /></TableCell>

                <TableCell className='recovered'>🡱
                <CountUp
                        start={0}
                        end={states.deltarecovered}
                        separator=","
                        duration={1}
                    /><br/>
                
                    <CountUp
                        start={0}
                        end={states.recovered}
                        separator=","
                        duration={1}
                    />
                    </TableCell>

                <TableCell className='deaths'>🡱
                <CountUp
                        start={0}
                        end={states.deltadeaths}
                        separator=","
                        duration={1}
                    /><br/>
                
                    <CountUp
                        start={0}
                        end={states.deaths}
                        separator=","
                        duration={1}
                    />
                 </TableCell>

            </TableRow>
            </>
        )
    }
}

export default StateTable;
