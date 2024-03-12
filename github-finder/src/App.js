import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../src/style.css'
import Navbar from './component/Navbar';
import UserList from './component/UserList';
import React, { useState } from 'react';
import Search from './component/Search';
import Loading from './component/Loading'
import Alert from './component/Alert';


const App = () => {

  const [users, setUsers] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);


  const searchUser = (keyword) => {
    setLoaded(true);

    setTimeout(async () => {
      const BASE_URL = "https://api.github.com/search/users?q=";
      const response = await fetch(BASE_URL + keyword);
      let data = await response.json();
      setUsers(data.items);
      setLoaded(false);
    }, 1000);
  }

  const clearUsers = () => setUsers([]);

  const sendError = (msg, alert) => {
    setError({ msg, alert } )
    setTimeout(()=>{
      setError({error : null})
    },1000)
  };



  if (isLoaded === true) {
    return (
      <div className="App">
        <Navbar />
        <Loading />
      </div>
    )
  }
  else {
    return (

      <div className="App">
        <Navbar />
        <div className='container'>
          <Search searchUser={searchUser} users={users} clearUsers={clearUsers} sendError={sendError} />
          <Alert error={error} />
          <UserList users={users} isLoaded={isLoaded} />
        </div>
      </div>
    )
  }
}

export default App

