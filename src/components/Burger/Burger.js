import React from 'react';
import classes from'./burger.module.css'
import BurgerIngredient from './Burgeringredient/Burgeringredient';
const burger=(props)=>{
return(
    <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"></BurgerIngredient>
        <BurgerIngredient type="cheese"></BurgerIngredient>
        <BurgerIngredient type="meat"></BurgerIngredient>
        <BurgerIngredient type="salad"></BurgerIngredient>
        <BurgerIngredient type="bacon"></BurgerIngredient>
        <BurgerIngredient type="bread-bottom"></BurgerIngredient>
       
    </div>
);
};
export default burger;