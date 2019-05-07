import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";

import Constants from "expo-constants";

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
      this.setState({ data: response });
      console.log(this.state.data);
    } catch (err) {
      console.log("Erro ao pegar os Estados", err);
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.data.map((rowdata, i) => (
          <TouchableOpacity key={i} style={styles.caixa}>
            <View style={{ flex: 1 }}>
              <Text style={styles.nome}>{rowdata.nome}</Text>
              <Text style={styles.uf}>{rowdata.uf}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={styles.nomefilho}>{rowdata.nome}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F1F1F1",
    marginTop: Constants.statusBarHeight
  },

  caixa: {
    flexDirection: "row",
    marginBottom: 25,
    backgroundColor: "#2CB8AD",
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 2
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 5
  },

  nomefilho: {
    color: "gold",
    textAlign: "right",
    paddingRight: 10
  },

  uf: {
    paddingLeft: 10,
    paddingBottom: 10,
    color: "#E6EDEF"
  }
});
