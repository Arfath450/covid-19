import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Styles from './Cards.module.css';
import CountUp from 'react-countup';

const Cards = ({ data : { confirmed, recovered, deaths, lastUpdate } }) => {

    if(!confirmed){
        return 'Loading...';
    }

    return(
        <>
    {/* <Paper> */}
        <div className='Ccontainer'>
            <Grid container spacing={1} justify="center">

                <Grid item component={Card} xs={12} md={3} className='card'>
                    <CardContent >
                        <Typography gutterbuttom className='confi'>Confirmed</Typography>
                        <Typography className='para'>Number of Confirmed Covid-19 cases</Typography>
                        <Typography className={Styles.cval} varient="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography className='date'>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className='card'>
                    <CardContent>
                        <Typography gutterbuttom className='confi'>Recovered</Typography>
                        <Typography className='para'>Number of people Recovered from Covid-19</Typography>
                        <Typography className={Styles.rval} varient="h5">
                        <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography className='date'>{new Date(lastUpdate).toDateString()}</Typography>
                        
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className='card'>
                    <CardContent>
                        <Typography className='confi' gutterbuttom>Deaths</Typography>
                        <Typography className='para'>Number of Deaths caused by Covid-19</Typography>
                        <Typography className={Styles.dval} varient="h5">
                        <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography className='date'>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    {/* </Paper> */}
        </>
    );
}

export default Cards;