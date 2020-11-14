import React, { useState } from 'react';

import './App.css';
import Search from './Search'
const App = () => {
  const [users, setUsers] = useState(null);
  let apiURL = 'https://randomuser.me/api/?results=10';

  const fetchUsers = () =>
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        console.log(users);
      });

  return (
    <div className='App'>
      <div className='header'>
        <h1>Random Users</h1>

        <Search/>
        
        <button className='fetch-button' onClick={fetchUsers}>
          Fetch Data
        </button>
      </div>

      <div className='users'>
        {users &&
          users.map((user, index) => {
            return (
              <div className='user' key={index}>
                <img className="profile-img" src={user.picture.medium} alt='user' />
                <h2>{user.name.first + ' ' + user.name.last}</h2>
                <div className='details'>
                  <p><strong>Email: </strong> {user.email}</p>
                  <p><strong>Phone:</strong> {user.phone}</p>
                  <p><strong>Birth Year:</strong> {'' + new Date(user.dob.date).getFullYear()}
                  </p>
                  <p><strong>Location: </strong>
                    {` ${user.location.city}, ${user.location.state}`} </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
