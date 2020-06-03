import React from 'react'

function UserCard(props){
    return (
        <div className = 'UserCard'>
            <div className='imgContainer'>
            <img src={props.avatarUrl} alt='avatar'/>
            </div>
            <div className='textContainer'>
            <h4>{props.login}</h4>
            <p>Profile: {props.profile}</p>
            <p>Followers: {props.followers}</p>
            <p>Following: {props.following}</p>
            </div>
        </div>
    )
}

export default UserCard