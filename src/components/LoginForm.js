import React, { Component } from "react";

import { Card, Button, CardSection, Input } from "./Common";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
