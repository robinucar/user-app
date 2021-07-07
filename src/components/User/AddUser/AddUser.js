import React, { useState } from 'react';
import Card from '../../UI/Card/Card';
import classes from './AddUser.module.css';
import Button from '../../UI/Button/Button';

const AddUser = ({ onAddUser }) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const addUserHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (+userAge < 1) {
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
  return (
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
  );
};

export default AddUser;
