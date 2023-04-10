import Modal from "../../UI/Modal";
import classes from "./Details.module.css";
import BTcarosuel from "./BTcarousel";
import SelectMenuUI from "../../Layout/selectMenu";

const Details = (props) => {
  // const price = `$${props.price.toFixed(2)}`;
  console.log("Details: ", props)

  return (
    <Modal>
      {props.children}
      <div> <BTcarosuel items={props.photos}/> </div>
      <p className="font-bold"> {props.name} </p>
      {props.price && <p><span className="font-bold">Precio: </span> {props.price} </p>}
      {props.pieces && <p><span className="font-bold">Piezas: </span> {props.pieces} </p>}
      <p><span className="font-bold">Status: </span> {props.status} </p>
      {props.options && <div className="flex w-full justify-center"> <SelectMenuUI options={props.options} /> </div>}
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onHideDetails}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Details;
