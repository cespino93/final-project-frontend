import React from 'react';
import './App.css';

class App extends React.Component {

    componentDidMount() {
      fetch("https://localhost:3000/api/v1/users/1")
        .then(r=>r.json())
        .then(console.log)
      }
  render() {
  
  return (
    "hello I'm React"
    );
  }
}

export default App;
