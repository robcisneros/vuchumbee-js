import { Fragment } from "react";
// import classes from "./Header.module.css";
// import frontImage from "../../assets/sheeplogo.png";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className="fixed top-0 left-0 px-6 w-full h-20 bg-rojo flex justify-between items-center box-border z-10">
            <h1 className="font-bold text-lg text-white">Vuchumbee</h1>
            <HeaderCartButton onClick={props.onShowCart} ></HeaderCartButton>
        </header>
        {/* <div className={classes['main-image']}>
            <img src={frontImage} alt='Don Borregon' />
        </div> */}
    </Fragment>
};

export default Header;