import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import React, { useContext, useState } from "react";
import Details from "./Details";

const MealItem = (props) => {
  // console.log("desde MealItem: ", props);

  // const imagesArray = Object.values(props.photos);
  const cartCtx = useContext(CartContext);
  const [detailsIsShown, setDetailsIsShown] = useState(false);
  //const price = `$${props.price.toFixed(2)}`;

  let colorStatus =  '';
      if(props.status === 'Disponible') {
        colorStatus = 'bg-verde';}
      else if (props.status === 'Agotado') {
        colorStatus = 'bg-rojo';
      } else {
        colorStatus = 'bg-naranja';
      }

  const showDetailsHandler = () => {
    setDetailsIsShown(true);
  };
  const hiddenDetailsHandler = () => {
    setDetailsIsShown(false);
  };

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <React.Fragment>
      {detailsIsShown && (
        <Details
          key={props.id}
          id={props.id}
          name={props.title}
          price={props.price}
          photos={props.photos}
          status={props.status}
          pieces = {props.pieces}
          options = {props.options}
          sauces = {props.sauces}
          ingredients={props.ingredients}
          sizeOptions = {props.sizeOptions}
          onHideDetails={hiddenDetailsHandler}
        />
      )}
      <div className="flex justify-between m-4 pb-4 border-b border-solid border-gray-400" onClick={showDetailsHandler}>
        <div className="w-40 h-40 flex flex-wrap self-center">
          <img
            className="w-40 h-40 rounded-full"
            src={props.image}
            alt={props.title}
          />
        </div>
        <div className="flex flex-col items-end  w-1/2">
          <p className="mb-1 text-right font-bold"> {props.title} </p>
          {props.pieces ? (<p className="mb-1 text-right font-bold">Piezas: {props.pieces} </p>) : ""}
          {props.price ? (
            <span className="mt-1 font-bold text-xl text-rojo text-right">
            {`$${props.price.toFixed(2)}`}
          </span>
          ) : <span className="mt-1 font-bold text-xl text-rojo text-right">
          Escoge
        </span>}
          <p className="mb-1 text-right"> {props.status} </p>
          <div className="flex flex-wrap flex-row">
            <button className={`h-5 w-5 mx-2 rounded-full border ${colorStatus}`}></button>
            <p>{props.status}</p>
          </div>
          <MealItemForm onAddToCart={addToCartHandler} />{" "}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MealItem;
