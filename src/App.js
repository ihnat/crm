import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { createClient, createHundredClients, fetchClients } from './actions/index';
import ClientList from './containers/ClientList';
import Header from './components/Header';
// import AddBtn from './components/AddBtn';
import {ButtonToolbar, Button } from 'react-bootstrap';
{/* <ButtonToolbar>
    <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
    <Button bsSize="large" active>Button</Button>
  </ButtonToolbar> */}

class App extends Component {
  constructor() {
    super();
    this.addClient = this.addClient.bind(this);
    this.addHundred = this.addHundred.bind(this);
  }
  addClient() {
    this.props.createClient();
  }
  addHundred() {
    this.props.createHundredClients();
  }
  render() {
    return (
      <div className="App">
        <Header className="App-header">
          <h2>CRM</h2>
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={this.addClient}>Add Member</Button>
            <Button onClick={this.addHundred}>Add 100 members</Button>
          </ButtonToolbar>
        </Header>
        <ClientList clients={this.props.clients}/>
      </div>
    );
  }
}

// export default App;

function mapStateToProps(state) {
  return { clients: state.clients.all };
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }


export default connect(mapStateToProps, { createClient, createHundredClients, fetchClients })(App);
