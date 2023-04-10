import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import useHttp from "../hooks/use-http";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const { error, isLoading, sendRequest: sendTasksRequest } = useHttp();

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          description={item.description}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const orderHandler = () => {
    setIsCheckout(true);
  };

  /*
  
  useEffect(() => {
    const transformMeals = (data) => {
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        });
      }

      setMeals(loadedMeals);
    };

    sendTasksRequest({
      url: "https://react-http-5cc8c-default-rtdb.firebaseio.com/orders.json/",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { user: userData, orderedItems: cartCtx.items },
    });
  }, [sendTasksRequest]);
  */

  const submitOrderHandler = async (userData) => {
    sendTasksRequest(
      {
        url: "https://react-http-5cc8c-default-rtdb.firebaseio.com/orders-colchas.json/",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { user: userData, orderedItems: cartCtx.items },
      },
      () => {}
    );
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  let cartModalContent = <p>Found no items on Cart.</p>;

  if (!isLoading && !didSubmit) {
    cartModalContent = (
      <React.Fragment>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span> {totalAmount} </span>
        </div>
        {isCheckout && (
          <Checkout
            onConfirm={submitOrderHandler}
            onCancel={props.onHideCart}
          />
        )}
        {!isCheckout && modalActions}
      </React.Fragment>
    );
  }
  if (error) {
    cartModalContent = <p> {error} </p>;
  }
  if (isLoading) {
    cartModalContent = <p>Sending order data...</p>;
  }
  if (didSubmit && !isLoading) {
    cartModalContent = (
      <React.Fragment>
        <p>Successfully sent the order!</p>
        <div className={classes.actions}>
          <button className={classes.button} onClick={props.onHideCart}>
            Close
          </button>
        </div>
      </React.Fragment>
    );
  }

  return <Modal onHideCart={props.onHideCart}>{cartModalContent}</Modal>;
};

export default Cart;
