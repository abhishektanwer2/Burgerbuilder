import React from 'react';
import classes from '../BuildControl/BuildControl.module.css'
const Buildcontrol=(props)=>(
<div className={classes.BuildControl}>
<div className={classes.Label}>{props.label}</div>
<button className={classes.Less} onClick={props.removed}disabled={props.disabled}>Less</button>
<button className={classes.More} onClick={props.added}>more</button>
</div>);
  
export default Buildcontrol;