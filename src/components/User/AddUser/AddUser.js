import React, { useState } from 'react';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import ErrorModal from '../../UI/Error/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState();
  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (> 0)',
      });
      return;
    }
    onAddUser(userName, userAge);
    setUserName('');
    setUserAge('');
  };

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.name}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={userName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor='age'>Age </label>
          <input
            id='age'
            type='number'
            value={userAge}
            onChange={userAgeChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
