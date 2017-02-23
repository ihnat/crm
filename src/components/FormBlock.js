import React, { Component } from 'react';
import { FormGroup, ControlLabel, Col } from 'react-bootstrap';


export default class FormBlock extends Component {
  render() {
    // let { element, name, value, onChange } = this.props;
    let inputProps = ((obj) => {
      let { name, value, onChange } = obj;
      return { name, value, onChange};
    })(this.props);

    // this.props.element && (inputProps.element = this.props.element);
    this.props.type && (inputProps.type = this.props.type);
    this.props.placeholder && (inputProps.placeholder = this.props.placeholder);


    return (
      <FormGroup>
        <Col componentClass={ControlLabel} xs={4}>
          {this.props.name}
        </Col>
        <Col xs={8}>
          <this.props.element
            {...inputProps}
          />
        </Col>
      </FormGroup>
    )
  }
}
