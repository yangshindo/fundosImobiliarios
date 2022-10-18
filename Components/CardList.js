import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

export default function CardList() {
  const listaFundos = [
    { nome: "BLMG11", rendimento: 0.8, recebido: 8.0 },
    { nome: "CPTS11", rendimento: 1.1, recebido: 11.0 },
    { nome: "HGRU11", rendimento: 0.82, recebido: 8.2 },
  ];

  var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  formatter.format


  const Item = (props) => (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.nome}>{props.nome}</Text>
        <Text style={styles.recebidoValue}>{formatter.format(props.recebido)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.rendimento}>Rendimento {formatter.format(props.recebido)}</Text>
        <Text style={styles.recebidoText}>RECEBIDO</Text>
      </View>
      <View>
        <Text style={styles.detalhesText}>Mais Detalhes</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item
      nome={item.nome}
      rendimento={item.rendimento}
      recebido={item.recebido}
    />
  );

  const styles = StyleSheet.create({
    container: {
      borderRadius: 6,
      elavation: 3,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.7,
      shadowRadius: 3,
      marginVertical: 7,
      textAlign: "center",
      backgroundColor: "#94B49F",
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 30,
      paddingVertical: 10,
    },
    nome: {
      fontFamily: "Impact",
      fontSize: 33,
      color: "#1c1c1c",
    },
    rendimento: {
      fontSize: 17,
      color: "#1c1c1c",
    },
    recebidoValue: {
      color: "#FEF9A7",
      fontSize: 33,
    },
    recebidoText: {
      fontSize: 22,
      color: "#FFF7E9",
      borderColor: "#FFF7E9",
      borderWidth: 1.5,
      borderRadius: 4,
      padding: 2,
    },
    detalhesText: {
      backgroundColor: "#FEF9A7",
      fontWeight: "500",
      color: "#303030",
    },
  });

  return (
    <FlatList
      data={listaFundos}
      renderItem={renderItem}
      keyExtractor={(item) => item.nome}
    />
  );
}
