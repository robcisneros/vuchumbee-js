import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.identifier === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // la const próxima existe solo si el item añadido ya se encuentra dentro de cartState
    // si es que existe, regresa la posición en la que hizo match
    const existingCartItemIndex = state.items.findIndex( 
      (item) => item.id === action.item.id
    );
      // si el item es añadido por primera vez al carrito, existingCartItem es undefined
      // si el item añado está más de una vez en el carrito, existingCartItem guarda ese item
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = { 
        // copia el item repetido en un new item llamado updatedItem
        ...existingCartItem,
        // en updated.amount se verá reflejado la cantidad ya actualizada
        amount: existingCartItem.amount + action.item.amount,
      };
      // copia el array de items 
      updatedItems = [...state.items];
      // updatedItems reemplaza al elemento repetido con updatedItem(amount actualizado)
      updatedItems[existingCartItemIndex] = updatedItem;
      // si no hay items repetidos, concatena los items de las acción ADD
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.identifier === "REMOVE_ITEM") {

    const existingCartItemIndex = state.items.findIndex( (item) => item.id === action.id);
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1){
      updatedItems = state.items.filter(item => item.id !== action.id);
    }else {
      const updatedItem = {...existingCartItem, amount:existingCartItem.amount -1};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.identifier === "CLEAR_CART") {
    return defaultCartState;
  }
  
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ identifier: "ADD_ITEM", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ identifier: "REMOVE_ITEM", id: id });
  };
  const clearCartHandler = () => {
    dispatchCartAction({ identifier: "CLEAR_CART" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
