import React , { useState } from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

const App = () => {

  const [usersList , setUsersList] = useState([]);

  const addUser = (userName , userAge) => {
    setUsersList((prevUserList) => {
      return [ 
          ...prevUserList , 
          { 
            name: userName , 
            age: userAge , 
            id: Math.random().toFixed(3).toString() 
          }
        ];
    });
  }

  return (
    <div>
      <AddUser onAddUser={ addUser } />
      <UserList users={ usersList } />
    </div>
  );
}

export default App;
