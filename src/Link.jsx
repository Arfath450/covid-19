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
        marginTop: '20px',
        marginBottom:'70px',
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

const Link = () => {
    const classes = useStyle();
    return(
        <>
        <Button size="large" classes={{root:classes.root, label: classes.label}}>
            <NavLink className={Styles.countLink} activeClassName="active" exact to="/tables">Countries Table</NavLink>
        </Button>
        </>
    )
}

export default Link;