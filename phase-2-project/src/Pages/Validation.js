import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import LogIn from '../components/LogIn'
import Register from '../components/Register'

class Validation extends Component {
    render() {
        return (
            <div className="root-container">
            <div className="box-controller">
            <div
                className={"controller " + (this.props.displayLoginBool
                ? "selected-controller"
                : "")}
                onClick={this.props.displayLogin}>
                Login
            </div>
            <div
                className={"controller " + (this.props.displayRegisterBool
                ? "selected-controller"
                : "")}
                onClick={this.props.displayRegister}>
                Register
            </div>
            </div>
            
            <div className="box-container">
            {this.props.displayLoginBool && <LogIn 
                user={this.props.user} 
                handleUsernameChange={this.props.handleUsernameChange} 
                handlePasswordChange={this.props.handlePasswordChange} 
                handleLogin={(e) => this.validateUser(e)}
                />}
            {this.props.displayRegisterBool && <Register 
                user={this.props.user} 
                handleLogin={(e) => this.createUser(e)}
                handleUsernameChange={this.props.handleUsernameChange} 
                handlePasswordChange={this.props.handlePasswordChange} 
                />}
            </div>
            <Route path="/login" component={LogIn}/>
        </div>
        )
    }
}


export default Validation;