import React from 'react';
import '../login.css'

export default class LogIn extends React.Component {
    

    render(){
        const isEnabled = this.props.user.username.length > 0 && this.props.user.password.length > 3 && this.props.user.password.length < 5

        return (
            <div className="inner-container">
                <div className="header">
                    Login
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

                    <button disabled={!isEnabled} type="submit" className="login-btn" value="submit">Login</button>
                </form>
        </div>
        )
    }
}