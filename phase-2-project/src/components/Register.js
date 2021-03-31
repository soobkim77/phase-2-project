import React, { Component } from 'react'
import '../login.css'
import Background from "../images/login.jpg"
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
                        required="Required"/>
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
                        pattern={[
                            '^.{4,4}$', // min 8 chars
                            '(?=.*\\d)' //number required
                        ]}/>
                    </div>
                    
                </form>
                <div>
                    <h1>Choose Your Taste (select 1)</h1>
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
                    <button type="submit" value="submit" className="login-btn">Register</button>
                    </form>
                </div>
            </div>
        
            
        
        )
    }
}
