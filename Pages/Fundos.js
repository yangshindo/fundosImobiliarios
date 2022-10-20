import { useState, useContext } from "react";
import { Searchbar, FAB, IconButton } from "react-native-paper";
import { FundosContext } from "../Contexts/FundosContext";
import { StyleSheet, Text, View, FlatList } from "react-native";

function Fundos() {
  const [searchQuery, setSearchQuery] = useState("");
  const { fundosDummyList } = useContext(FundosContext);

  function onChangeSearch(query) {
    setSearchQuery(query);
  }

  function searchFunction() {
    fundosDummyList.find((element) => element === query);
  }

  const Item = (props) => (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>{props.nome}</Text>
      </View>
      <View style={styles.row}>
        <Text>{props.cotas}</Text>
      </View>
      <View style={styles.row}>
        <IconButton icon="file-document-edit" />
      </View>
    </View>
  );

  const renderItem = ({ item }) => <Item nome={item.nome} cotas={item.cotas} />;

  const styles = StyleSheet.create({
    container: {
      borderRadius: 6,
      elavation: 3,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.7,
      shadowRadius: 3,
      marginVertical: 7,
      textAlign: "center",
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
    fab: {
      position: "absolute",
      margin: 0,
      right: 0,
      bottom: 0,
    },
  });

  return (
    <View>
      <Searchbar
        placeholder="Procurar Fundo"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <FAB
        label="Adicionar"
        icon="plus"
        style={styles.fab}
        onPress={() => console.log("Pressed")}
      />
      <FlatList
        data={fundosDummyList}
        renderItem={renderItem}
        keyExtractor={(item) => item.nome}
      />
    </View>
  );
}

export default Fundos;
