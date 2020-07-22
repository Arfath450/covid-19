import React, { useState, useEffect } from 'react';
import {Switch as Linked, Route} from 'react-router-dom';
import Router from './Router';
import Tables from './Tables';
import IndiaTable from './IndiaTable';
import City from './City';
import './index.css';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7SharpIcon from '@material-ui/icons/Brightness7Sharp';

const getIntitalValue = () => {
    const isReturn = 'light' in localStorage;
    const Saved = JSON.parse(localStorage.getItem('light'));
    const Prefered = getPre();
    if(isReturn){
        return Saved;
    }else
    if(Prefered){
        return true;
    }else{
        return false;
    }
    
}

const getPre = () => {
    if(!window.matchMedia) return;

   return window.matchMedia("(prefers-color-scheme: light)").matches;
}

const App = () => {
    const[darkMode, setDark] = useState(getIntitalValue())

    useEffect(() => {
        localStorage.setItem('light', JSON.stringify(darkMode))
    },[darkMode])

    

    return(
        <>
        
        <div className={darkMode ? "dark-mode" : 'light-mode'}>
        
        <div className='switch' onClick={() => setDark(prevmode => 
          !prevmode
          )}>
            {darkMode ? <Brightness7SharpIcon/> :  <Brightness4Icon/>}
        </div>
        <Linked>
                <Route exact path="/" component={Router} />
                <Route exact path="/tables" component={Tables} />
                <Route exact path="/state" component={IndiaTable}/>
                <Route exact path="/district" component={City}/>
        </Linked>
        </div>
        </>
    )
}

export default App;