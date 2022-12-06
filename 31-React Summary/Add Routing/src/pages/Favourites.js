import React, { useContext } from 'react';

import FavouriteContent from '../store/favourites-context';
import MeetupList from '../components/meetups/MeetupList';

const FavouritesPage = () => {

    const favCtx = useContext(FavouriteContent);

    let content;

    if (favCtx.totalFavourites === 0) {
        content = <p>No Favourites yet!</p>
    } else {
        content = <MeetupList meetups={favCtx.favourites} />
    }

    return (
        <section>
            <h1>My Favourites</h1>
            {content}
        </section>
    )
};

export default FavouritesPage;