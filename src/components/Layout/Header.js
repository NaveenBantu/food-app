import React from "react";

import classes from './Header.module.css'
import mealsImage from '../../assets/fastfood.jpg'
import HeaderCartButton from "./HeaderCartButton.js";

const Header = props => {
    return <>
        <header className={classes.header}>
            <h1>Foodys</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']} >
            <img src={mealsImage} alt='FoodImg' />
        </div>
    </>
}

export default Header;