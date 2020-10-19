import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Aux";
import Buildcontrols from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSumarry from "../../components/Burger/OrderSummary/OrderSummary";
const INGRIDENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.4,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalprice: 4,
    purchaseable: false,
    purchasing: false,
   
  };
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  updatepurchasestate(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igkey) => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  }
  purchasecanclhandler=()=>{
    this.setState({purchasing:false});
  }
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatecount = oldCount + 1;
    const updateIngredients = { ...this.state.ingredients };
    updateIngredients[type] = updatecount;
    const priceaddition = INGRIDENT_PRICES[type];
    const oldprice = this.state.totalprice;
    const newprice = oldprice + priceaddition;
    this.setState({ totalprice: newprice, ingredients: updateIngredients });
    this.updatepurchasestate(updateIngredients);
  };
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatecount = oldCount - 1;
    const updateIngredients = { ...this.state.ingredients };
    updateIngredients[type] = updatecount;
    const priceaddition = INGRIDENT_PRICES[type];
    const oldprice = this.state.totalprice;
    const newprice = oldprice - priceaddition;
    this.setState({ totalprice: newprice, ingredients: updateIngredients });
    this.updatepurchasestate(updateIngredients);
  };
  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalclosed={this.purchasecanclhandler}>
          <OrderSumarry ingredients={this.state.ingredients} />
        </Modal>

        <Burger ingredients={this.state.ingredients}></Burger>
        <Buildcontrols
          ingredientadded={this.addIngredientHandler}
          ingredientremoved={this.removeIngredientHandler}
          disabled={disableInfo}
          price={this.state.totalprice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
