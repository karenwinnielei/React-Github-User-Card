import React, {useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react';

function FollowerCard(props){
    const [follower, setFollower] = useState([]);

    useEffect(() =>{
            axios.get('https://api.github.com/users/karenwinnielei/followers')
    .then(res => {
        setFollower(res.data)
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
    }, [])


    return (
        <div>
            <h4>Followers</h4>
            {follower.map(user => (
                <div className = 'FollowerCard'>
                    <div className='imgContainer'>
                    <img src={user.avatar_url} alt='avatar'/>
                    </div>
                    <div className= 'textContainer'>
                    <h4>{user.login}</h4>
                    <p>Profile: {user.html_url}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FollowerCard