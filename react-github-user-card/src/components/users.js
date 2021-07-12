import React from 'react' 

export default class UserCard extends React.Component{
    componentDidMount(){
    console.log('mounting card')
    }
    render(){
        const {users} = this.props;

        return(
            <div>
                <div className="image">
                    <img alt="avatar" src={users.avatar_url}/>
                </div>
                <div className="user">
                    <h2>{users.name}</h2>
                    <p>Login: {users.login}</p>
                    <p>About Me: {users.bio}</p>
                    <p>Location: {users.location}</p>
                    <p>Followers: {users.followers}</p>
                    <p>Following: {users.following}</p>
                </div>
            </div>
        )
    }
}