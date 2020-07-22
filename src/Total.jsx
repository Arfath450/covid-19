import React from 'react';
import CountUp from 'react-countup';
import { Card, CardContent, Typography, Grid, } from '@material-ui/core';
import Styles from './Total.module.css';
import { Sparklines, SparklinesLine } from 'react-sparklines';


class Total extends React.Component{

    render(){
        const {total, graph} = this.props;
        return(
            <>
            <div>
            <Grid container spacing={1} className={Styles.grid}>
                <Grid item component={Card} xs={12} md={3}>
                    <CardContent >
                        <Typography>Confirmed</Typography>
                        <Typography>{total.deltaconfirmed}</Typography>
                        <Typography>{total.confirmed}</Typography>
                        <Sparklines data={graph.dailyconfirmed}>
                            <SparklinesLine color="red" />
                        </Sparklines>
                        
                    </CardContent>
                </Grid>

            


            </Grid>
            

            </div>
            </>
        )
    }
}

export default Total;