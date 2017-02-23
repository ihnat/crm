import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateClient } from '../actions/index';


import FormBlock from '../components/FormBlock.js';
import { Col, Form, FormControl, Checkbox } from 'react-bootstrap';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

class ClientItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.client,
      index: props.index + 1
    };
    this.handleChange = this.handleChange.bind(this);
  }
  updateClient() {
    this.props.updateClient(this.state);
  }
  componentDidUpdate() {
    this.updateClient();
  }
  handleChange(e) {
    let object = {};
    if (typeof e === 'string') {
      object['timezone'] = e;
    } else if (e.target.name === 'adult') {
      object['adult'] = e.target.checked;
    } else {
      object[e.target.name] = e.target.value;
    }
    this.setState(Object.assign({}, this.state, object));
  }
  render() {
    return (
      <div className="client-item col-md-8">
        <div className="client-item__id">
          {this.state.index}
        </div>
        <Form horizontal>
          <FormBlock
            element={FormControl}
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            placeholder="Pedro Radriges"
          />
          <FormBlock
            element={FormControl}
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            type="text"
            placeholder="Need something..."
          />
          <FormBlock
            element={FormControl}
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            type="text"
            placeholder="+48 4545454"
          />
          <FormBlock
            element={TimezonePicker}
            name="timezone"
            value={this.state.timezone}
            onChange={this.handleChange}
            type="text"
            placeholder="Select timezone..."
          />
          <FormBlock
            element={Checkbox}
            name="adult"
            value={this.state.adult}
            onChange={this.handleChange}
          />
        </Form>
      </div>
    );
  }
}

export default connect(null, { updateClient })(ClientItem);
