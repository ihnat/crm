import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { createClient, createHundredClients, fetchClients } from './actions/index';
import ClientList from './containers/ClientList';
import Header from './components/Header';
// import AddBtn from './components/AddBtn';
import { Button } from 'react-bootstrap';

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
        <Header>
          <Button bsStyle="primary" onClick={this.addClient}>Add client</Button>
          <Button onClick={this.addHundred}>Add 100 clients</Button>
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
