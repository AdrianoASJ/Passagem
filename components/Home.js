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
      <View style={{flex: 1, paddingTop: 20}}>
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
            <View style={styles.caixaSuperior}>
              <Text style={styles.textCaixaSuperior}>Não Visto</Text>
            </View> 

          </TouchableOpacity>
        ))}
      </ScrollView>
      </View>
    );
  }
}
//posicao relativa no pai e posição absoluta no filho para criar a caixinha
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: Constants.statusBarHeight
  },

  caixa: {
    margin: 10,
    backgroundColor: "#117D00",
    flexDirection: "row",
    borderColor: "gray",
    marginBottom: 25,
    borderRadius: 10,
    borderWidth: 2
  },

  caixaSuperior:{
    backgroundColor: "#005CE6",
    borderColor: '#0E0F1A',
    position: 'absolute',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    top: -10,
    right: 0,
  },

  textCaixaSuperior: {
    color: "#E6EDEF",
    paddingLeft: 10,
    paddingRight: 10
  },

  nome: {
    color: "#E6EDEF",
    fontWeight: "bold",
    fontSize: 18,
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
    color: "#9FC6FF",
    paddingLeft: 10,
    paddingBottom: 10,
  }
});
