import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { createClient, fetchClients } from './actions/index';
import ClientList from './containers/ClientList';
import Header from './components/Header';
import AddBtn from './components/AddBtn';

class App extends Component {
  constructor() {
    super();
    this.createPost = this.createPost.bind(this);
  }
  componentWillMount() {
    this.props.fetchClients();
  }
  createPost() {
    this.props.createClient();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>CRM</h2>
          <Header>
            <button type="button" onClick={this.createPost}>Add Member</button>
          </Header>
        </div>
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


export default connect(mapStateToProps, { createClient, fetchClients })(App);
