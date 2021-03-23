import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';


class AddFriend extends React.Component {
    state = {
        friend: {
            
            name:'',
            age:'',
            email:''
        }
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/api/friends', this.state.friend)
            .then(res => {
            this.props.history.push('/friends')
            })
            .catch(err => {
            console.log(err)
        
            })
    }

    render() {
        return(
            <div className='addFriendComponent'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.friend.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="age"
                        placeholder="age"
                        value={this.state.friend.age}
                        onChange={this.handleChange}
                    />
                    <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.friend.email}
                    onChange={this.handleChange}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default AddFriend