import React, { Component } from 'react'
import '../login.css'
export default class Register extends Component {
    render() {
        const isEnabled = this.props.user.username.length > 0 && this.props.user.password.length > 3 && this.props.user.password.length < 5 && this.props.user.taste.length > 0

        return (
             
        
            <div className="inner-container">
            
                <div className="header">
                Register
                </div>
                
                <form className="box" onSubmit={this.props.handleLogin}>

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                        type="text"
                        value={this.props.user.username}
                        onChange={this.props.handleUsernameChange}
                        name="username"
                        className="login-input"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">4-Digit PIN</label>
                        <input
                        type="password"
                        value={this.props.user.password}
                        onChange={this.props.handlePasswordChange}
                        name="password"
                        className="login-input"
                        placeholder="Password" 
                        />
                    </div>
                    
                </form>
                <div>
                    <h4>_______________________________________________</h4>
                    <h4>Choose Your Favorite Genre </h4>
                    <form onSubmit={this.props.createUser} onChange={this.props.handleChange}> 
                    {this.props.lists.map(list => {
                        return (
                        <div key={list.list_name_encoded}>
                            <input type="radio" value={list.list_name_encoded} id={list.display_name} name="list" /> 
                            <label htmlFor={list.display_name}>{list.display_name}</label>
                        </div>
                        )
                    })}
                    <br/>
                    <button disabled={!isEnabled} type="submit" value="submit" className="login-btn">Register</button>
                    </form>
                </div>
            </div>
        
            
        
        )
    }
}
