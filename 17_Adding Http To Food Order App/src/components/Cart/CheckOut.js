import React , { useRef , useState } from 'react';
import classes from './CheckOut.module.css';

const isEmpty = value => value.trim() === '';
const isNotTenChars = value => value.trim().length === 11 ;

const CheckOut = (props) => {

    const [formInputValid , setFormInputValid] = useState({
        name: true,
        street: true,
        phone: true,
        city: true,
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const phoneInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPhoneIsValid = isNotTenChars(enteredPhone);

        setFormInputValid({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            phone: enteredPhoneIsValid,
            city: enteredCityIsValid,
        });

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPhoneIsValid;
        
        if (!formIsValid) {
            return;
        }; 

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            phone: enteredPhone,
            city: enteredCity,
        });
    };
    
    const nameControlClasses = `${classes.control} ${formInputValid.name ? '' : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputValid.street ? '' : classes.invalid}`;
    const phoneControlClasses = `${classes.control} ${formInputValid.phone ? '' : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formInputValid.city ? '' : classes.invalid}`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id='name' ref={nameInputRef} />
                {!formInputValid.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor="street">Street</label>
                <input type="text" id='street' ref={streetInputRef} />
                {!formInputValid.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={phoneControlClasses}>
                <label htmlFor="number">Phone Number</label>
                <input type="number" id='number' ref={phoneInputRef} />
                {!formInputValid.phone && <p>Please enter a valid phone number!</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor="city">City</label>
                <input type="text" id='city' ref={cityInputRef} />
                {!formInputValid.city && <p>Please enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>
                    Confirm Order
                </button>
            </div>
        </form>
    );
};

export default CheckOut;