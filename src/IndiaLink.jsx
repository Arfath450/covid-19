import React from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './App.module.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    root:{
        background:'#455a64',
        color: 'white',
        padding:'10px 40px',
        margin: '20px 0',
        boxShadow: '0 5px 5px 0 black',
        "&:hover": {
            backgroundColor: "grey",
        }
    },
    label:{
        color:'white',
        fontSize:'20px',
    }
}) 

const IndiaLink = () => {
    const classes = useStyle();
    return(
        <>
        <Button size="large" classes={{root:classes.root, label: classes.label}}><NavLink className={Styles.stateLink} activeClassName="active" exact to="/state">India Status</NavLink></Button>
        </>
    )
}

export default IndiaLink;