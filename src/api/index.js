import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'


export const fetchData = async (country)=>{
    let changaleUrl = url;

    if(country){
        changaleUrl = `${url}/countries/${country}`
    }

    try{
            const {data : {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changaleUrl);

            const modifiedData ={
                confirmed: confirmed,
                recovered: recovered,
                deaths: deaths,
                lastUpdate: lastUpdate,
            }
            return modifiedData;
    }
    catch (error){
    }
}

export const fetchDailyData = async () =>{
    try{
            const {data} = await axios.get('https://covid19.mathdro.id/api/daily');
           
            console.log(data);
            const modifiedData = data.map((dailyData) => ({
                confirmed : dailyData.confirmed.total,
                deaths : dailyData.deaths.total,
                date : dailyData.reportDate
            }))
             return modifiedData;
    }
    catch (error){

    }
}

export const fetchCn = async ()=>{
    try{
            const {data:{countries}} = await axios.get(`${url}/countries`);
            console.log(countries)
            return countries.map((country)=> country.name);
    }catch(error){

    }
}