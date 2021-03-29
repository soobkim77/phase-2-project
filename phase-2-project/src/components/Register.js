import React, { Component } from 'react'
import '../login.css'
export default class Register extends Component {
    render() {
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
                        placeholder="Username" 
                        require="true"/>
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
                        require="true"/>
                    </div>
                    <button
                        type="submit"
                        value="submit"
                        className="login-btn"
                        >Register</button>
                </form>
            </div>
        
            
        
        )
    }
}
