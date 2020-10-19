import React from 'react';
import Aux from '../../../hoc/Aux';
const OrderSummary=(props)=>{
const ingredientsummary= Object.keys(props.ingredients)
.map(igKey=>{
    return (<li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}</li>)
});
return(<Aux>
<h3>YOUR ORDER</h3>
<p>A deliciouse burger thsit following ingredients</p>
<ul>
 {ingredientsummary}
</ul>
<p>Continue to checkout</p>
</Aux>);
};
export default OrderSummary