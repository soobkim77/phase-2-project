import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './Pages/Home';
import BookInfo from './components/BookInfo'
import './login.css';
import Validation from './Pages/Validation';
import NavBar from './components/NavBar';
import MyUser from './Pages/MyUser'
import './App.css'



class App extends React.Component {
   
  state = {
    fiction: [],
    nonF: [],
    currentF: 0,
    currentN: 0,
    currentMy: 0,
    currentBook: [],
    user: {
      username: "",
      password: "",
      taste: "",
      id: ""
    },
    isLoggedIn: false,
    displayLogin: true,
    displayRegister: false,
    myList: [],
    allUsers: [],
    allLists: [],
    myBooks: [],
    added: false,
    change: false
  }

  //Get Requests to nyt

  getFiction = () => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=u8T73HzFr5YcjQLuZJwZs9H3LE6ALaRa`)
    .then(r => r.json())
    .then(list => this.setState({fiction: list.results.books}))
  }

  getNonFiction = () => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=u8T73HzFr5YcjQLuZJwZs9H3LE6ALaRa`)
    .then(r => r.json())
    .then(list => this.setState({nonF: list.results.books}))
  }

  getAllLists = () => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=u8T73HzFr5YcjQLuZJwZs9H3LE6ALaRa`)
    .then(r => r.json())
    .then(lists => this.setState({allLists: lists.results}))
  }

  getMyList = (URL) => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${URL}.json?api-key=u8T73HzFr5YcjQLuZJwZs9H3LE6ALaRa`)
    .then(r => r.json())
    .then(books => this.setState({myList: books.results.books}))
  }

  //get request to db.json

  getMyBooks = (id) => {
    fetch(`http://localhost:3000/mybooks?userID=${id}`)
    .then(r => r.json())
    .then(books => this.setState({myBooks: books}))
  }

  getUsers = () => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(allUsers => this.setState({allUsers})) 
  }

  //display

  displayRegister = () => {
    this.setState({displayLogin: false, displayRegister: true})
  }

  displayLogin = () => {
    this.setState({displayLogin: true, displayRegister: false})
  }

  bookInfo = (book) => {
    this.setState({currentBook: book})
  }

  fiveMyBooks = () => {
    return this.state.myList.slice(this.state.currentMy, this.state.currentMy+5)  
  }

  moreMyBooks = () => {
    if (this.state.currentMy < this.state.myList.length - 5) {
      
      this.setState({currentMy: this.state.currentMy+5})
    } else {
      this.setState({ currentMy: 0 })
    }
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

  //handlers

  handleUsernameChange = (e) => {
    this.setState({user: {...this.state.user, username: e.target.value}})
  }

  handlePasswordChange = (e) => {
    this.setState({user: {...this.state.user, password: e.target.value}})
  }

  handleTasteChange = (e) => {
    this.setState({user: {...this.state.user, taste: e.target.value}})
  }

  handleLogOut = () => {
    this.setState({isLoggedIn: false, user: {
      username: "",
      password: "",
      taste: "",
      id: ""
    }})
  }

  addBook = (book) => {
      let update = [...this.state.myBooks]
      book.userID = this.state.user.id
      update.push(book)
      fetch(`http://localhost:3000/mybooks`,{
        "method": 'POST',
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(book)
      })
      .then(r=>r.json())
      .then(book => {
        this.setState({myBooks: update})
      })
  }

  editPref = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/users/${this.state.user.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.user)
    }).then(r => r.json())
    .then(res => this.getMyList(res.taste))
  }

  //user validation and creation

  createUser = (e) => {
    e.preventDefault()
    let allUsers = this.state.allUsers
    let duplicateUser = allUsers.find(user => user.username === this.state.user.username)
    if(duplicateUser){
      alert('Username Already Exists')
    }
    else{
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.user.username,
        password: this.state.user.password,
        taste: this.state.user.taste
      })
    })
    .then(res => {
      this.setState({isLoggedIn: true})
      let URL = this.state.user.taste.replaceAll("^\"+|\"+$", "")
      this.getMyList(URL)
      this.getFiction()
      this.getNonFiction()
      })
    }
  }
  
  validateUser = (e) => {
    e.preventDefault()
    let allUsers = this.state.allUsers
    let correctUser = allUsers.find(user => user.username === this.state.user.username)
    if (correctUser){
      if (correctUser.password === this.state.user.password){
      this.setState({isLoggedIn: true, user: correctUser})
      let URL = correctUser.taste.replaceAll("^\"+|\"+$", "")
      this.getMyList(URL)
      this.getMyBooks(correctUser.id)
      this.getFiction()
      this.getNonFiction()
    }
    else {
      alert('Incorrect Password, Please Try Again')
    }
  }
  else{ alert("Username not found, Please Try Again")}
  }

  removeBook = (id) => {
    let newlist = this.state.myBooks.filter(x => x.id !== id)
    fetch(`http://localhost:3000/mybooks/${id}`,{"method": "DELETE"})
    .then(r => r.json())
    .then(this.setState({myBooks: newlist}))
  }

  componentDidMount = () => {
    // this.getFiction()
    // this.getNonFiction()
    this.getUsers()
    this.getAllLists()
  }

  render (){
    return (
      <div>
        
        {this.state.isLoggedIn ? <NavBar logout={this.handleLogOut} /> : null}
        <Switch>
          <Route path="/books" render={() => <Home  fList={this.fiveFBooks()} nList={this.fiveNBooks()} moreF={this.moreFBooks} moreN={this.moreNBooks} click={this.bookInfo} myList={this.fiveMyBooks()} moreMy={this.moreMyBooks} header={this.state.user.taste} />}/>
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
            validateUser={(e) => this.validateUser(e)}
            lists={this.state.allLists}
            get={this.getAllLists}
            handleChange={this.handleTasteChange} 
            />
          }}>
            
            {this.state.isLoggedIn ? <Redirect to='/books' /> : null  } 
            
          </Route>
          <Route path="/book/:rank" render={() => {
            return <BookInfo user={this.state.user.username} book={this.state.currentBook} add={this.addBook} />}}
            />
          <Route path='/user' render={() => <MyUser change={this.handleTasteChange} myBooks={this.state.myBooks} changeBool={this.state.change} pref={this.editPref} taste={this.handleTasteChange} bookInfo={this.bookInfo} lists={this.state.allLists} remove={this.removeBook}/>} />
        </Switch>
    </div>
     
    )}
}
export default App