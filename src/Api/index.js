import axios from 'axios';

const url = "https://covid19.mathdro.id/api";
console.log(url)

export const fetchData = async (country) => {
    let changeUrl = url;

    if(country){
        changeUrl =  `${url}/countries/${country}`;
    }

    try {
        const { data:{confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeUrl);
        
        return{confirmed, recovered, deaths, lastUpdate};
    } catch (error) {
        
    }
}

export const fetchMonthlyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const modifiedData = data.map((daily) => ({
            confirmed:daily.confirmed.total,
            deaths:daily.deaths.total,
            date:daily.reportDate,
        }));
        
        return modifiedData;
    } catch (error) {
        
    }
}

export const fetchCountries = async () => {
    try {
        const { data : { countries } } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name)
    } catch (error) {
        
    }
}