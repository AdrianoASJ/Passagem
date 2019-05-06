import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    try {
      const EstadosApi = await fetch(
        "http://nodeutil.deway.com.br/api/brasil/estados"
      );
      const response = await EstadosApi.json();
      this.setState({ data: [response] });
      console.log(this.state.data);
    } catch (err) {
      console.log("Error fetching data", err);
    }
  }

  render() {
    return (
      <View style={style.container}>
        <Text>Testando</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    paddingTop: 25
  }
});
