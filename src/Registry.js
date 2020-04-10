import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";
class Registry extends Component {
  state = {
    registryInfo: {
      email: "",
      password: "",
      city: "",
      description: "",
    },
  };

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let newRegistryInfo = this.state.registryInfo;
    newRegistryInfo[name] = value;
    this.setState({registryInfo:newRegistryInfo});
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    alertify.success(this.state.registryInfo.email + " registried to db",3);
  };


  renderFormEnhanced() {
    return (
      <Form onSubmit={this.onSubmitHandler}>
        <h2>Create your account</h2>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={this.onChangeHandler}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={this.onChangeHandler}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            type="select"
            name="city"
            onChange={this.onChangeHandler}
          >
            <option>Ankara</option>
            <option>Isparta</option>
            <option>Samsun</option>
            <option>Manisa</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="email">Description</Label>
          <Input
            type="text"
            name="description"
            placeholder="Enter Description"
            onChange={this.onChangeHandler}
          ></Input>
        </FormGroup>
        <FormGroup>
            <Button type="submit" color="success">Registry</Button>
        </FormGroup>
      </Form>
    );
  }

  render() {
    return (
      <div>
        {this.renderFormEnhanced()}
      </div>
    );
  }
}

export default Registry;
