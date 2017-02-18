import React, { Component } from 'react';
import ClientRow from './ClientRow';

class ClientList extends Component {
  renderList() {
    return this.props.clients.map((client) => <ClientRow key={client.id} client={client}/>);
  }
  render() {
    return (
      <table  className="client-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>description</th>
            <th>phone number</th>
            <th>date</th>
            <th>timezone</th>
            <th>adult</th>
          </tr>
        </thead>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    );
  }
}

export default ClientList;
