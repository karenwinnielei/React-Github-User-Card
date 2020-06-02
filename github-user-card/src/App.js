import React from 'react';
import axios from 'axios'

import UserCard from './components/UserCard'

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      login: [],
      avatarUrl: [],
      location: [],
      followers: [],
      following: []
  }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/karenwinnielei')
      .then(res => {
        console.log(res.data)
        this.setState({
          login: res.data.login,
          avatarUrl: res.data.avatar_url,
          location: res.data.location,
          followers: res.data.followers,
          following: res.data.following,
        })
      })
      .catch(err => 
        console.log(err))
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Github User Card</h1>
      </header>
      <div>
        <UserCard
          login={this.state.login}
          avatar={this.state.avatarUrl}
          location={this.state.location}
          followers={this.state.followers}
          following={this.state.following}
        />
      </div>
    </div>
  );
  }
}

export default App;
