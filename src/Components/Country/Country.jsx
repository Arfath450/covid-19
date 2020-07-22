import React, { useState, useEffect } from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import { fetchCountries } from '../../Api';
import Styles from './Country.module.css';

const Country = ({ countryChange }) => {

    const[fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries( await fetchCountries());
        }

        fetchApi();
    },[setFetchedCountries]);

    return(
        <>
        <FormControl className={Styles.FormControl}>
            <NativeSelect className={Styles.opt} defaultValue="" onChange={(e) => countryChange(e.target.value)} >
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option className={Styles.global} key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        </>
    )
}

export default Country;