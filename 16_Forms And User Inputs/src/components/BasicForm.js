import React from "react";
import useInput from "../hooks/use-input-useReducer";

const nameNotEmpty = value => value.trim() !== '';
const emailNotEmpty = value => value.includes('@');

const BasicForm = (props) => {

  const {
    value: firstNameValue,
    isValid: firstNameValueIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlueHandler,
    reset: restFirstNameInput
  } = useInput(nameNotEmpty);

  const {
    value: secondNameValue,
    isValid: secondNameValueIsValid,
    hasError: secondNameInputHasError,
    valueChangeHandler: secondNameChangeHandler,
    inputBlurHandler: secondNameBlueHandler,
    reset: restSecondNameInput
  } = useInput(nameNotEmpty);

  const {
    value: emailValue,
    isValid: emailValueIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlueHandler,
    reset: restEmailInput
  } = useInput(emailNotEmpty);

  let formIsValid = false;

  if (firstNameValueIsValid && secondNameValueIsValid && emailValueIsValid) {
    formIsValid = true;
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted')
    console.log(firstNameValue,secondNameValue,emailValue)

    restFirstNameInput('');
    restSecondNameInput('');
    restEmailInput('');
  };

  const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
  const secondNameInputClasses = secondNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name' 
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlueHandler}
            value={firstNameValue}
          />
          {firstNameInputHasError && <p className="error-text">Please enter a first name.</p>}
        </div>
        <div className={secondNameInputClasses}>
          <label htmlFor='name'>Second Name</label>
          <input 
            type='text' 
            id='name' 
            onChange={secondNameChangeHandler}
            onBlur={secondNameBlueHandler}
            value={secondNameValue}
          />
          {secondNameInputHasError && <p className="error-text">Please enter a second name.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
          <label htmlFor='email'>Email</label>
          <input 
            type='email' 
            id='email' 
            onChange={emailChangeHandler}
            onBlur={emailBlueHandler}
            value={emailValue}
          />
          {emailInputHasError && <p className="error-text">Email must no be empty.</p>}
        </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;