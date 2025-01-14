import React from 'react'
import { Typography } from '@material-ui/core';
import moment from 'moment'
import { makeStyles } from "@material-ui/styles"
import TodayRoundedIcon from '@material-ui/icons/TodayRounded';

const useStyles = makeStyles({
    heading: {
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
        padding: "10px",
        color: "#0a043c",
    }, calender: {
        display: "flex",
        fontSize: "17px",
        marginTop: "5px",
        color: "#FF0066"
    }, icon: {
        color: "#FF0066",
        fontSize: "22px"
    }
  });

function Header() {
    const classes = useStyles ();
    return (
        <div className={classes.heading}>
            <Typography variant="h3" component="h2">
                Todo list
            </Typography>
            <div className ={classes.calender}>
            <TodayRoundedIcon className={classes.icon}/>
                {moment().format("dddd, Do MMMM")}
            </div>
        </div>
    )
}

export default Header
