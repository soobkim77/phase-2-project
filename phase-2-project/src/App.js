import LogIn from './components/LogIn'
import React from 'react';


class App extends React.Component {
   APIkey = 'u8T73HzFr5YcjQLuZJwZs9H3LE6ALaRa'

  componentDidMount = () => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=u8T73HzFr5YcjQLuZJwZs9H3LE6ALaRa`)
    .then(r => r.json())
    .then(list => console.log(list.results))
  }

  render (){
  return (
    <LogIn/>
  )}
}

export default App;
