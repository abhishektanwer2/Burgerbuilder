import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";
const OrderSummary = (props) => {
  const ingredientsummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>YOUR ORDER</h3>
      <p>A deliciouse burger thsit following ingredients</p>
      <ul>{ingredientsummary}</ul>
      <p>Total price :{props.price}</p>
      <p>Continue to checkout</p>
      <Button clicked={props.purchasecanceled} btnType={"Danger"}>
        Cancel
      </Button>
      <Button clicked={props.purchasedcontinue} btnType={"Success"}>
        Continue
      </Button>
    </Aux>
  );
};
export default OrderSummary;
