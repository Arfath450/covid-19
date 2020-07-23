import React, { useState, useEffect } from 'react';
import {fetchMonthlyData} from '../../Api';
import {Line, Bar} from 'react-chartjs-2';
import { red } from '@material-ui/core/colors';
import Styles from './Charts.module.css';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

const Charts = ( {data: { confirmed, recovered, deaths}, country}) => {
    const[daily, setDaily] = useState([]);

    useEffect(() => {
        const fetchMonthly = async () => {
            setDaily(await fetchMonthlyData());  

        }

        fetchMonthly();
    },[]);

    const lineChart = (
        daily.length
        ? (
            <Bar className={Styles.chart}
            data={{
                labels:daily.map(({date}) => date),
                labels:['Confirmed','Recovered', 'Deaths'],
                    datasets: [{
                    data: daily.map(({confirmed}) => confirmed),
                    data: daily.map(({recovered}) => recovered),
                    data: daily.map(({deaths}) => deaths), 
                    backgroundColor:["red",'green','grey'],
                    data:[confirmed.value, recovered.value,deaths.value], 
                    fill:true,
                }],
            }}
                options={{
                    legend: { display: false },
                    title: { display: true, text:`current status in the world`, fontColor:'grey', fontSize:16,
                                },
                    scales: {
                        yAxes: [{
                            ticks:{
                                fontColor:'grey',
                                
                                        }
                                }],
                                xAxes: [{
                                    ticks:{
                                fontColor:'grey',
                                fontSize:14,
                                        }
                                }],
                            },
                }}
        />
        ) : null
    )

    const BarChart = (
        confirmed
        ? (
            <Bar 
                data={{
                    labels:['Confirmed', 'Recovered', 'Deaths'],
                    datasets:[{
                        label:"people",
                        backgroundColor: ['red','green','grey'],
                        data:[confirmed.value, recovered.value, deaths.value]
                    }],
                    
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text:`current status in ${country}`},
                }}
            /> ): null
    )

    return(
        <>
        <div className={Styles.container}>
            {country ? BarChart : lineChart}
            
        </div>
        </>
    )
}

export default Charts;