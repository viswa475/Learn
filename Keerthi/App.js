import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []};
  }
  componentDidMount() {
    fetch('https://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.text())
      .then(data => {this.setState({ data })
  })
      .catch(console.log)
  }
  render() {
    return (
      <h4> {this.state.data}</h4>
    );
  }
}

export default App;
