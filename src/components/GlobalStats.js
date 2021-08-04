import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
    
    maxWidth:600,
    margin:"0 auto",
    marginTop:10,
    display:"flex",
    justifyContent:"center",
    },
    confirm:{
      background:" linear-gradient(180deg,#edde5d,#f09819)",
      borderRadius:"15px",
      // background:'#f09819',
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    recover:{
      background: "linear-gradient(180deg ,#a8e063,#56ab2f)",
      borderRadius:"15px",
      // background: '#5ab331',
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    death:{
      background: "linear-gradient( 180deg, #e68d6d, rgb(165 0 0))",
      borderRadius:"15px",
      // background: 'rgb(165 0 0)',
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    grid:{
      

    },
    title:{
      color:"black",
      fontStyle:"oblique",
    }
  }),
);
export default function GlobalStats({data}) {
  let date=new Date()
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
              <Grid className={classes.grid} item xs={12} sm={4} >
      <Paper className={classes.confirm} elevation={3}>
      <h3 className={classes.title}>Confirme Cases</h3>
     <h3> <CountUp
       start={0}
       end={data.confirm.value}
       duration={3}
       separator=","
     />
     </h3>
     <p>Dated: {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}</p>
      </Paper>
        </Grid>
             <Grid item xs={12} sm={4} >
      <Paper className={classes.recover} elevation={3}>
      <h3 className={classes.title}>Recover</h3>
     <h3 ><CountUp
       start={0}
       end={data.recover.value}
       duration={3}
       separator=","
     />
     </h3>
     <p>Dated: {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}</p>
     
      </Paper>
        </Grid>
        <Grid item xs={12} sm={4} >
      <Paper className={classes.death} elevation={3}>
      <h3 className={classes.title}>Deaths</h3>
     <h3 >
     <CountUp
       start={0}
       end= {data.death.value}
       duration={3}
       separator=","
     />
    
     </h3>
     <p>Dated: {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}</p>
     
      </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
