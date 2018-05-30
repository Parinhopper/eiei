import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    name: '',
  }
export default class PersonList extends React.Component {
  state = {
    persons: []
  }
  handleChange = event => {
    this.setState({ name: event.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`http://localhost:2403/users/`, user )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HELLO WORLD</h1>
        </header>
        <ul>
          <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
        </ul>
      </div>
    );
  }
}

