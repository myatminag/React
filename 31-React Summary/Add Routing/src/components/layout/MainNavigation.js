import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavouriteContent from '../../store/favourites-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {

    const favCtx = useContext(FavouriteContent);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/newMeetups'>New Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favourites'>
                            Favourites Meetups
                            <span className={classes.badge}>{favCtx.totalFavourites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;