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
<p>Current Price:<strong>{props.price.toFixed(2)}</strong></p> 
{controls.map(cntrl=>(<BuildControl key={cntrl.label} label={cntrl.type}
added={()=>props.ingredientadded(cntrl.type)}
removed={()=>props.ingredientremoved(cntrl.type)}
disabled={props.disabled[cntrl.type]}
/>))}
<button 
className={classes.OrderButton}
 disabled={!props.purchaseable}
 onClick={props.ordered}>ORDER NOW</button>
</div>);
  
export default Buildcontrols;