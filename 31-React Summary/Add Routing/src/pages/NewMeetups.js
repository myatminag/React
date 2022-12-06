import React from 'react';
import { useNavigate } from 'react-router-dom';

import NewMeetupFrom from '../components/meetups/NewMeetupFrom';

const NewMeetupsPage= () => {

    const navigate = useNavigate();

    const addMeetupHandler = (meetupData) => {
        fetch(
            'https://meetups-b1c89-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/', { replace: true });
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupFrom onAddMeetup={addMeetupHandler} />
        </section>
    );
};

export default NewMeetupsPage;