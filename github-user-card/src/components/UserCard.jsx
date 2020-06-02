import React from 'react'

function UserCard(props){
    return (
        <div className = 'userCard'>
            <img src='{props.avatarUrl}' alt='avatar'/>
            <h4>{props.login}</h4>
            <p>{props.location}</p>
            <p>{props.followers}</p>
            <p>{props.following}</p>
        </div>
    )
}

export default UserCard