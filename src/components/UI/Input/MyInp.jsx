import React from 'react';
import classes from './MyInp.module.css'

const MyInp = ({children,...props}) => {
    return (
        <input {...props} className={classes.MyInp}/>
    );
};

export default MyInp;