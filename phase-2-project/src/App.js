import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import BookInfo from './components/BookInfo'
import './login.css';
import Validation from './Pages/Validation';



class App extends React.Component {
   
  state = {
    fiction: [],
    nonF: [],
    currentF: 0,
    currentN: 0,
    currentBook: [],
    user: {
      username: "",
      password: "",
      taste: []
    },
    displayLogin: true,
    displayRegister: false,
    myList: [],
    allUsers: []
  }

  getMyList = () => {
    fetch(`http://localhost:3000/mybooks?userID=${this.state.user.id}`)
    .then(r => r.json())
    .then(list => this.setState({myList: list}))
  }

  addBook = (book) => {
      let update = [...this.state.myList]
      update.push(book)
      this.setState({myList: update})
  }

  componentDidMount = () => {
    // this.getFiction()
    // this.getNonFiction()
    this.getUsers()
  }

  getUsers = () => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(allUsers => this.setState({allUsers})) 
    }

  bookInfo = (book) => {
    this.setState({currentBook: book})
  }
  

  fiveFBooks = () => {
    return this.state.fiction.slice(this.state.currentF, this.state.currentF+5)  
  }

  moreFBooks = () => {
    if (this.state.currentF < this.state.fiction.length - 5) {
      
      this.setState({currentF: this.state.currentF+5})
    } else {
      this.setState({ currentF: 0 })
    } 
  }

  getFiction = () => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=u8T73HzFr5YcjQLuZJwZs9H3LE6ALaRa`)
    .then(r => r.json())
    .then(list => this.setState({fiction: list.results.books}))
  }

  fiveNBooks = () => {
    return this.state.nonF.slice(this.state.currentN, this.state.currentN+5)  
  }

  moreNBooks = () => {
    if (this.state.currentN < this.state.nonF.length - 5) {
      
      this.setState({currentN: this.state.currentN+5})
    } else {
      this.setState({ currentN: 0 })
    }
  }

  getNonFiction = () => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=u8T73HzFr5YcjQLuZJwZs9H3LE6ALaRa`)
    .then(r => r.json())
    .then(list => this.setState({nonF: list.results.books}))
  }

 

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
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        username: this.state.user.username,
        password: this.state.user.password,
        taste: ""
      })
    })
  }
  
  validateUser = (e) => {
    e.preventDefault()
    let allUsers = this.state.allUsers
    let correctUser = allUsers.find(user => user.username === this.state.user.username)
    if (correctUser.password === this.state.user.password){
      console.log('access granted')
    }
    else {
      console.log('wrong password')
    }
    

     

    
  }

  render (){
    
    return (
      <div>
        <Switch>
          <Route path="/books" render={() => <Home fiction={this.getFiction} fList={this.fiveFBooks()} nList={this.fiveNBooks()} moreF={this.moreFBooks} moreN={this.moreNBooks} click={this.bookInfo}/>}/>
          <Route exact path="/" render={()=> {
            return <Validation
            user={this.state.user}
            displayLoginBool={this.state.displayLogin}
            displayRegisterBool={this.state.displayRegister}
            displayRegister={this.displayRegister}
            displayLogin={this.displayLogin}
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
            createUser={(e) => this.createUser(e)}
            validateUser={(e) => this.validateUser(e)}/>
          }} />
          <Route path="/book/:rank" render={() => {
            return <BookInfo book={this.state.currentBook} add={this.addBook} />}}
            />

        </Switch>
    </div>
     
    )}
}
export default App

 {/* </div>
        <Validation
        user={this.state.user}
        displayLoginBool={this.state.displayLogin}
        displayRegisterBool={this.state.displayRegister}
        displayRegister={this.displayRegister}
        displayLogin={this.displayLogin}
        handleUsernameChange={this.handleUsernameChange}
        handlePasswordChange={this.handlePasswordChange}
        createUser={this.createUser}
        validateUser={this.validateUser}/>
      </div> */}