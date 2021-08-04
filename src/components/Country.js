import React,{useEffect, useState, useRef} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { getDefaultNormalizer } from '@testing-library/react';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
    maxWidth:1000,
    margin:"0 auto",
    marginTop:50
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    title:{
      color:"#3f51b5",
        textTransform:'uppercase'
    }
  }),
);
export default function Country() {
  let datas;
  let confirmed=useRef();
  let death=useRef();
  let recover=useRef();

  let [covidData, setCovidData]=useState([]);
  //https://covid19.mathdro.id/api/country
  
  
  useEffect(() => {
    async function getData(){
      try{
        let all= await axios.get("https://covid19.mathdro.id/api/countries");
        console.log(all)
            console.log(all.data)
        setCovidData(all.data.countries)
        
        //    console.log(datas);
        
        
        
        
      }
      catch(e){
        console.log(e.message)
      }
    }
    
    getData()
    // console.log(all.data.Countries)
}, [])
console.log(covidData);

// console.log(datas.data);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
    
      
          {
              covidData.map((item)=>{
                return(
                    <Grid item xs={12} sm={4} >
      <Paper className={classes.paper} elevation={3}>
      <h3 className={classes.title}>{item.name}</h3>
     <h3 ref={confirmed}></h3>
      </Paper>
        </Grid>
                )
              })

          }
         
              
       
        
      </Grid>
    </div>
  );
}
