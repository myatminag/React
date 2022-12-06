import React , { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {

    const [enterUsername , setEnterUsername] = useState('');
    const [enterAge , setEnterAge] = useState('');
    const [error , setError] = useState();

    const usernameChange = (event) => {
        setEnterUsername(event.target.value);
    };

    const ageChange = (event) => {
        setEnterAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

    const addNewUser = (event) => {
        event.preventDefault();
        if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty-values).'
            });
            return;
        }
        if (+enterAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        props.onAddUser(enterUsername , enterAge);
        setEnterUsername('');
        setEnterAge('');
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={ errorHandler } />}
            <Card className={ styles.input }>
                <form onSubmit={ addNewUser }>
                    <label htmlFor="username"/>Username
                    <input 
                        id="username" 
                        type="text" 
                        value={ enterUsername } 
                        onChange={ usernameChange }
                    ></input>
                    <label htmlFor="age"/>Age (Years)
                    <input 
                        id="age" 
                        type="number" 
                        value={ enterAge } 
                        onChange={ ageChange }
                    ></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;