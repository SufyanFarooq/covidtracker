import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import {fetchCountries} from '../api/Api'

const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
    background: "silver",

  },
  
  title: {
    flexGrow: 1,
    color:"black",
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  list: {
    fontSize:"20px",
    fontFamily:"times"  ,
    background:"silver",
    border:"none",
    outline:"none",
    borderBottom:"1px solid black",
    // borderRadius:"15px",
    height: "40px",
    width:"250px"
  },
 

}));

export default function Nav({handleCountryChange}) {
  const classes = useStyles();
  let [countrylist, setCountryList]=useState([]);
  useEffect(()=>{
    const fetchCountryList= async()=>{
      setCountryList(await fetchCountries())
    }
    fetchCountryList();
  },[]);
 
  return (
    <div className="navHead">
      <AppBar position="static">
        <Toolbar className={classes.root}>
        
          <Typography className={classes.title} variant="h6" noWrap>
            Covid Tracker App

          </Typography>
          
         
          <div className="search">
          <select className={classes.list}
          onChange={(e)=>{
            handleCountryChange(e.target.value);
          }}>
            <option value="global"
            variant="outlined"
            >Global</option>
            {
              countrylist.map((country, index)=>{
                return <option key={index} value={country}>
              {country}
            </option>
                
              })
            }
          </select>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
