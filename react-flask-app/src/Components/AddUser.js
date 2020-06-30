import React from 'react';
import axios from 'axios';

export default class AddUser extends React.Component {
    state = {
        name: ''
    }

    handleFNameChange = event => {
        this.setState({ fullname: event.target.value});
    };
    handleNameChange = event => {
        this.setState({ usernamename: event.target.value});
    };
    handlePassChange = event => {
        this.setState({ password: event.target.value});
    };
    handleAddressChange = event => {
        this.setState({ address: event.target.value});
    };
    handleEmailChange = event => {
        this.setState({ email: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            fullname: this.state.fullname,
            username: this.state.username,
            password: this.state.password,
            address: this.state.address,
            email: this.state.email
        }

        //(url, payload)
        axios.post('https://jsonplaceholder.typicode.com/users', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Full Name:<input type='text' name='fullname' onChange={this.handleFNameChange}/><br/>
                    Username:<input type='text' name='username' onChange={this.handleNameChange}/><br/>
                    Password:<input type='password' name='password' onChange={this.handlePassChange}/><br/>
                    Address:<input type='text' name='address' onChange={this.handleAddressChange}/><br/>
                    Email:<input type='email' name='email' onChange={this.handleEmailChange}/><br/>
                </label>
                <button type="submit">Add User</button>
            </form>
        )
    }
}