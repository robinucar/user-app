import React, { useState } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import './App.css';
import AddUser from './components/User/AddUser/AddUser';
import UsersList from './components/User/UsersList/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div className='App'>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
