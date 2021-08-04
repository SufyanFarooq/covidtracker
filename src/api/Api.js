
import axios from "axios";
const url='https://covid19.mathdro.id/api';


export const fetchData=async(country)=>{

    let changeURL=url;
    if(country){
        changeURL=`${url}/countries/${country}`
    }
    try{
        let data= await axios.get(changeURL);
        const requiredData={
            confirm:data.data.confirmed,
            death:data.data.deaths,
            recover:data.data.recovered
        }
        console.log(requiredData)
        return requiredData;
    }catch(e){
        console.log(e)
    }

}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        const dailyDataStats = data.map((data) => ({
            confirmed: data.confirmed.total,
            deaths: data.deaths.total,
            date: data.reportDate,
            recovered: data.recovered.total
        }))
        console.log(dailyDataStats);
        return dailyDataStats;
    }
    catch (err) {
        console.log(err);
    }
}

export const fetchCountries= async()=>{
    try{
        const{data:{countries}}= await axios.get(`${url}/countries`);
        const countrylist= countries.map((country)=>country.name);
        console.log(countrylist)
        return countrylist

    }catch(e){
        console.log(e.message)
    }
}

fetchCountries()