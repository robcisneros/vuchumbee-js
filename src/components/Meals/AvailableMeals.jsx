import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import React  from "react";

const AvailableMeals = (props) => {

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{props.content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
