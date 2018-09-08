import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";

import {
  Header,
  Button,
  Spinner,
  Card,
  CardSection
} from "./components/Common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBDJZT1D3icOHL7LdSS2HM5ETgbag0JRYc",
      authDomain: "authentication-c3270.firebaseapp.com",
      databaseURL: "https://authentication-c3270.firebaseio.com",
      projectId: "authentication-c3270",
      storageBucket: "authentication-c3270.appspot.com",
      messagingSenderId: "269308711122"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  contentStyle: {
    flex: 1,
    flexDirection: "row"
  }
};

export default App;
