import React from 'react';
import classes from'./burger.module.css'
import BurgerIngredient from './Burgeringredient/Burgeringredient';
const burger=(props)=>{
    let transformedingredient=Object.keys(props.ingredients)
    .map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=><BurgerIngredient key={igKey+i}type={igKey}></BurgerIngredient>);
    }).reduce((arr,ele)=>{return arr.concat(ele)},[]);
    if(transformedingredient.length===0){
        transformedingredient=<p>please  add ingredients</p>
    }
return(
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"></BurgerIngredient>
       {transformedingredient}
        <BurgerIngredient type="bread-bottom"></BurgerIngredient>
       
    </div>
);
};
export default burger;