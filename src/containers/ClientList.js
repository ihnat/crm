import React, { Component } from 'react';
import ClientItem from './ClientItem';
import Infinite from 'react-infinite';


class ClientList extends Component {
  renderList() {
    return this.props.clients.map((client, i) => <ClientItem key={client.id} index={i} client={client}/>);
  }
  render() {
    return (
        <Infinite  className="client-list row" useWindowAsScrollContainer={true} elementHeight={280}>
          {this.renderList()}
        </Infinite>

    );
  }
}

export default ClientList;
