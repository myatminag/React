import { createContext, useState } from "react";

const FavouriteContent = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsFavourite: (meetupId) => {},
});

export const FavouritesContentProvider = (props) => {

    const [userFavourites, setUserFavourites] = useState([]);

    const addFavouriteHandler = (favouriteMeetups) => {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.concat(favouriteMeetups);
        });
    };

    const removeFavouriteHandler = (meetupId) => {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
        });
    };

    const itemIsFavouriteHandler = (meetupId) => {
        return userFavourites.some(meetup => meetup.id === meetupId);
    };

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler,
    };

    return (
        <FavouriteContent.Provider value={context}>
            {props.children}
        </FavouriteContent.Provider>
    )
}

export default FavouriteContent;