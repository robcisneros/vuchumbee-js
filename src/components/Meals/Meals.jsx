import {Fragment} from 'react';
import AvailableMeals from './AvailableMeals';

const Meals = (props) => {
    return <Fragment>
        <AvailableMeals content={props.content}/>
    </Fragment>
};

export default Meals;