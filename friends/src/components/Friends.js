import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Friend from './Friend';

class Friends extends React.Component {
    state = {
        friends: []
    }


componentDidMount() {
    this.getData();
}

getData = () => {
    axiosWithAuth().get('/api/friends')
    .then(res => {
        console.log(res);
        this.setState({
            friends: res.data
        },() => console.log(this.state.friends))
        
    })
    .catch(err => {
        console.log(`error: ${err}`)
    })
}

render() {
    return (
        <div className='FriendComponent'>
            <h2>Here are your friends</h2>
            {this.state.friends.map(friend => (
                 <Friend friend={friend} />
            ))}
        </div>
    )
}
}

export default Friends