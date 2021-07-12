import React from 'react' 
import axios from 'axios';
import { FollowerCard } from './components/followers';
import UserCard from './components/users';


export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      users: {},
      followers: []
    }
  }
  componentDidMount(){
    axios
    .get('https://api.github.com/users/eleonard214')
    .then((res)=>{
      this.setState({
        ...this.state, users: res.data
      });
    })
    .catch((err)=>{
      console.log(err, "fetch users error")
    })
    axios
    .get('https://api.github.com/users/eleonard214/followers')
    .then((res)=>{
      this.setState({
        ...this.state, followers: res.data
      });
    })
    .catch((err)=>{
      console.log(err, "fetch followers error")
    });
  }
  render(){
    return(
      <div>
        <UserCard users={this.state.users}/>
        <h2>Followers</h2>
        {this.state.followers.map((follower)=>{
          return <FollowerCard key={follower.id} follower={follower}/>
        })}
      </div>
    )
  }
}


