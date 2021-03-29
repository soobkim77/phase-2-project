import LogIn from './components/LogIn'
import Register from './components/Register'
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './login.css'
let APIkey = 'u8T73HzFr5YcjQLuZJwZs9H3LE6ALaRa'


class App extends React.Component {
   
  state = {
    user: {
      username: "",
      password: ""
    },
    displayLogin: true,
    displayRegister: false
  }

  // componentDidMount = () => {
  //   fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=u8T73HzFr5YcjQLuZJwZs9H3LE6ALaRa`)
  //   .then(r => r.json())
  //   .then(list => console.log(list.results))
  // }


  displayRegister = () => {
    this.setState({displayLogin: false, displayRegister: true})
  }

  displayLogin = () => {
    this.setState({displayLogin: true, displayRegister: false})
  }

  handleUsernameChange = (e) => {
    this.setState({user: {...this.state.user, username: e.target.value}})
  }

  handlePasswordChange = (e) => {
    this.setState({user: {...this.state.user, password: e.target.value}})
  }

  createUser = (e) => {
    e.preventDefault()
    console.log(e)
  }
  
  validateUser = (e) => {
    e.preventDefault()
    console.log(e)
  }

  render (){
    console.log(this.state.user)
  return (
    <div className="root-container">
      <div className="box-controller">
       <div
         className={"controller " + (this.state.isLoginOpen
         ? "selected-controller"
         : "")}
         onClick={this.displayLogin}>
         Login
       </div>
       <div
         className={"controller " + (this.state.isRegisterOpen
         ? "selected-controller"
         : "")}
         onClick={this.displayRegister}>
         Register
       </div>
     </div>
      
      <div className="box-container">
      {this.state.displayLogin && <LogIn 
        user={this.state.user} 
        handleUsernameChange={this.handleUsernameChange} 
        handlePasswordChange={this.handlePasswordChange} 
        handleLogin={(e) => this.validateUser(e)}
        />}
      {this.state.displayRegister && <Register 
        user={this.state.user} 
        handleLogin={(e) => this.createUser(e)}
        handleUsernameChange={this.handleUsernameChange} 
        handlePasswordChange={this.handlePasswordChange} 
         />}
     </div>

  


        <Route path="/login" component={LogIn}/>
    </div>
  )}
}

export default App;
