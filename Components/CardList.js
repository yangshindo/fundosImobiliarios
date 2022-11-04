import { useContext } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { FundosContext } from "../Contexts/FundosContext";
import { useState } from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


function CardList() {
  const { fundosUserList } = useContext(FundosContext);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function Item(props) {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.nome}>{props.title}</Text>
          <Text style={styles.recebidoValue}>
            {formatter.format(props.cotas * props.rendimento)}
          </Text>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.rendimento}>Rendimento</Text>
            <Text>{formatter.format(props.rendimento)}</Text>
          </View>
          {props.pago === 1 ? (
            <Text style={styles.recebidoText}>RECEBIDO</Text>
          ) : (
            <Text style={styles.aguardandoText}>NÃO RECEBIDO</Text>
          )}
        </View>
        <View>
          <Text style={styles.dataComText}><Icon name="calendar" size={16} /> Data com: dia {props.datacom}</Text>
        </View>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      rendimento={item.rendimento}
      recebido={item.recebido}
      pago={item.pago}
      cotas={item.cotas}
      datacom={item.datacom}
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
    column: {
      flexDirection: "column",
      alignItems: "center",
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
      fontSize: 16,
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
    aguardandoText: {
      fontSize: 22,
      color: "black",
      borderColor: "black",
      borderWidth: 1.5,
      borderRadius: 4,
      padding: 2,
    },
    dataComText: {
      backgroundColor: "#FEF9A7",
      fontWeight: "500",
      color: "#303030",
      padding: 3,
    },
  });

  return (
    <FlatList
      data={fundosUserList}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  );
}

export default CardList;
