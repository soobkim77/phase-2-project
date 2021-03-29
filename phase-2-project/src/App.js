import LogIn from './components/LogIn'
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Containers/Home'


class App extends React.Component {
  state={
    fiction: [],
    nonF: [],
    currentF: 0,
    currentN: 0

  }


  //  APIkey = 'u8T73HzFr5YcjQLuZJwZs9H3LE6ALaRa'
  
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

  componentDidMount = () => {
    this.getFiction()
    this.getNonFiction()
  }

  render (){
  return (
    <div>
      <LogIn />
      <Home fiction={this.getFiction} fList={this.fiveFBooks()} nList={this.fiveNBooks()} moreF={this.moreFBooks} moreN={this.moreNBooks}/>

        <Route path="/login" component={LogIn}/>
    </div>
  )}
}

export default App;
