import React from 'react'

export class FollowerCard extends React.Component {
    render(){
        const {follower} = this.props;
        return(
            <div>
                <div className="followimg">
                    <img alt='follower avatar' src={follower.avatar_url}/>
                    <p>Login: {follower.login}</p>
                </div>
            </div>
        )
    }
}
export default FollowerCard;