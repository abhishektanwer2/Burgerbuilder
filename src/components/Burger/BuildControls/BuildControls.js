import React from 'react';
import classes from '../BuildControls/BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'
const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
];

const Buildcontrols=(props)=>(
<div className={classes.BuildControls}>
<p><strong>current price ={props.price.toFixed(2)}</strong></p> 
{controls.map(cntrl=>(<BuildControl key={cntrl.label} label={cntrl.type}
added={()=>props.ingredientadded(cntrl.type)}
removed={()=>props.ingredientremoved(cntrl.type)}
disabled={props.disabled[cntrl.type]}
/>))}
</div>);
  
export default Buildcontrols;