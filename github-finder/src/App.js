import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../src/style.css'
import Navbar from './component/Navbar';
import UserList from './component/UserList';
import React from 'react';
import Search from './component/Search';
import Loading from './component/Loading'
import Alert from './component/Alert';



export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoaded: false,
      error: null
    }
  }



  searchUser = (keyword) => {
    this.setState({ isLoaded: true })

    setTimeout(async () => {
      const BASE_URL = "https://api.github.com/search/users?q=";
      const response = await fetch(BASE_URL + keyword);
      let data = await response.json();
      this.setState({ users: data.items, isLoaded: false });
    }, 1000);
  }



  clearUsers = () => {
    this.setState({ users: [] })
  }

  sendError = (msg, alert) => {
    this.setState({ error: { msg, alert } })

    setTimeout(() => {
      this.setState({ error: null })
    }, 2000);
  }

  render() {

    if (this.state.isLoaded === true) {
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
            <Search searchUser={this.searchUser} users={this.state.users} clearUsers={this.clearUsers} sendError={this.sendError} />
            <Alert error={this.state.error} />
            <UserList users={this.state.users} isLoaded={this.state.isLoaded} />
          </div>
        </div>
      )
    }
  }
}

export default App

