import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";

import { Header } from "./components/Common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBDJZT1D3icOHL7LdSS2HM5ETgbag0JRYc",
      authDomain: "authentication-c3270.firebaseapp.com",
      databaseURL: "https://authentication-c3270.firebaseio.com",
      projectId: "authentication-c3270",
      storageBucket: "authentication-c3270.appspot.com",
      messagingSenderId: "269308711122"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
