import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateClient } from '../actions/index';

import { Col, Form, FormGroup, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';

import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';


class ClientItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.client
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
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} xs={4}>
              Email
            </Col>
            <Col xs={8}>
              <FormControl
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                type="text"
                placeholder="Jane Doe"
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} xs={4}>
              Description
            </Col>
            <Col xs={8}>
              <FormControl
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                type="text"
                placeholder="Need something..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} xs={4}>
              Phone
            </Col>
            <Col xs={8}>
              <FormControl
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                type="text"
                placeholder="+48"
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} xs={4}>
              timezone
            </Col>
            <Col xs={8}>
              <TimezonePicker
                absolute={false}
                value={this.state.timezone}
                placeholder="Select timezone..."
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} xs={4}>
              Adult
            </Col>
            <Col xs={8}>
              <Checkbox
                name="adult"
                checked={this.state.adult}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default connect(null, { updateClient })(ClientItem);
