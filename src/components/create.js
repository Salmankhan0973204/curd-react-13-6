

import axios from 'axios';
import { useHistory } from 'react-router-dom';

import useInput from '../hooks/use-input';

export default function Create() {
    let history = useHistory();
  

    const isNotEmpty = (value) => value.trim() !== '';
    const isEmail = (value) => value.includes('@');
  
      const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
       
      } = useInput(isNotEmpty);
      const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        
      } = useInput(isNotEmpty);
      const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
       
      } = useInput(isEmail);
    
      let formIsValid = false;
    
      if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true;
      }
    
      const submitHandler = event => {
        axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
            firstNameValue,
            lastNameValue,
            emailValue,
          
        }).then(() => {
            history.push('/read')
        })
        event.preventDefault();

       
    
        if (!formIsValid) {
          return;
        }
    
        console.log('Submitted!');
        console.log(firstNameValue, lastNameValue, emailValue);
    
       
      };
      

      const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
      const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
      const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';
    




   


    
    return (
        <div>
           
            

           
            <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="error-text">Please enter a first name.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p className="error-text">Please enter a last name.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Please enter a valid email address.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
 


        </div>
    )
}
