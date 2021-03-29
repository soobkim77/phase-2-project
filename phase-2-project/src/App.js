import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './login.css'
import Validation from './pages/Validation';
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
    
    return (
      <Validation
      user={this.state.user}
      displayLoginBool={this.state.displayLogin}
      displayRegisterBool={this.state.displayRegister}
      displayRegister={this.displayRegister}
      displayLogin={this.displayLogin}
      handleUsernameChange={this.handleUsernameChange}
      handlePasswordChange={this.handlePasswordChange}
      createUser={this.createUser}
      validateUser={this.validateUser}

      />    
    )}
}

export default App;
