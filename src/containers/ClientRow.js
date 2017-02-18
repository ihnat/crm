import React, { Component } from 'react';

// import { Field, FieldArray, reduxForm } from 'redux-form';

class ClientRow extends Component {
  render() {
    let {client} = this.props;
    return (
      <tr className="client-row">
        <td>{client.name}
        </td>
        <td>description</td>
        <td>phone number</td>
        <td>date</td>
        <td>timezone</td>
        <td>adult</td>
      </tr>
    );
  }
}

export default ClientRow;
