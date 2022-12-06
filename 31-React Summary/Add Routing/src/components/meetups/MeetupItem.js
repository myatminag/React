import React, { useContext } from 'react';
import Card from '../ui/Card';

import classes from './MeetupItem.module.css';
import FavouriteContent from '../../store/favourites-context';

const MeetupItem = (props) => {

    const favCtx =useContext(FavouriteContent);

    const itemFavourites = favCtx.itemIsFavourite(props.id);

    const toggleFavouriteStatusHandler = () => {
        if (itemFavourites) {
            favCtx.removeFavourite(props.id)
        } else {
            favCtx.addFavourite({
                id: props.id,
                title: props.title,
                image: props.image,
                description: props.description,
                address: props.address
            })
        }
    };

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavouriteStatusHandler}>
                        {itemFavourites ? 'Remove From Favourites' : 'To Favourites'}
                    </button>
                </div>
            </Card>
        </li>
    );
};

export default MeetupItem;