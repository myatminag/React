import React , { Fragment } from 'react';

import mealsImage from '../../assets/meals-2.jpg';
import classes from './Header.module.css';
import HeaderCartButtton from './HeaderCartButtton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButtton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of joyfulness" />
            </div>
        </Fragment>
    );
};

export default Header;