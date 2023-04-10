import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const [btnIsHighligthed, setBtnIsHighligthed] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx; // destructuring cartCtx

  const numberOfCartItems = items.reduce(
    (currentNumber, currentItem) => {
      return currentNumber + currentItem.amount;
    },
    0
  );

  const btnClasses = `${classes.button} ${btnIsHighligthed ? classes.bump : ''} `;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighligthed(true);
    const timer = setTimeout(() =>{
      setBtnIsHighligthed(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Tu carrito</span>
      <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
