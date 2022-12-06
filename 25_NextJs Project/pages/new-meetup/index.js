import React from 'react';
import { useRouter } from 'next/router';

import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetUpPage = () => {

    const router = useRouter();

    const addMeetUpHandler = async (enteredMeetupData) => {
        const response = await fetch('api/new-meetup' , {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Context-Type': 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);

        router.push('/')
    }

    return (
        <NewMeetupForm onAddMeetUp={addMeetUpHandler} />
    );
};

export default NewMeetUpPage;