import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CountUp from 'react-countup';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

class StateTable extends React.Component{

    render(){

        const { states } = this.props;
        return(
            <>
            <TableRow>
                    <TableCell className='state'>{states.state}</TableCell>
                    <TableCell className='confirmed'><ArrowUpwardIcon/>
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

                <TableCell className='recovered'><ArrowUpwardIcon/>
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

                <TableCell className='deaths'><ArrowUpwardIcon/>
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
