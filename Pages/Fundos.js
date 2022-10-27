import React, { useState, useContext } from "react";
import {
  Searchbar,
  IconButton,
  Dialog,
  Portal,
  Paragraph,
  Button,
  TextInput,
} from "react-native-paper";
import { FundosContext } from "../Contexts/FundosContext";
import { StyleSheet, Text, View, FlatList } from "react-native";
import BackgroundColorProvider from "../Components/BackgroundColorProvider";

function Fundos() {
  const [searchQuery, setSearchQuery] = useState("");

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [cotasValue, setCotasValue] = useState(1);
  const [editCotas, setEditCotas] = useState(false);

  const { fundosDBList } = useContext(FundosContext);
  const { fundosUserList, setFundosUserList } = useContext(FundosContext);

  function onChangeSearch(query) {
    setSearchQuery(query);
  }

  function searchFunction() {
    const fundoSelecionado = fundosDBList.find(
      (item) => item.nome === searchQuery
    );
    if (fundoSelecionado) {
      setFundosUserList((prevValue) => [...prevValue, fundoSelecionado]);
      console.log(fundosUserList);
    } else {
      showDialog();
    }
  }

  function deleteItemById(id) {
    const filteredData = fundosUserList.filter((item) => item.nome !== id);
    setFundosUserList(filteredData);
  }

  function editItemById(id) {
    const foundItem = fundosUserList.find((item) => item.nome === id);
    foundItem.cotas = cotasValue;
    setEditCotas(false);
    setCotasValue(1)
  }

  function renderItem({ item }) {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text>{item.nome}</Text>
          <View style={styles.row}>
            <IconButton
              icon="file-document-edit"
              onPress={() => setEditCotas(item.nome)}
            />
            <IconButton
              icon="delete"
              onPress={() => deleteItemById(item.nome)}
            />
          </View>
        </View>
        <View style={styles.row}>
          {editCotas === item.nome ? (
            <React.Fragment>
              <TextInput
                label="Número de cotas"
                value={cotasValue}
                onChangeText={(cotasValue) => setCotasValue(cotasValue)}
              />
              <IconButton
                icon="arrow-right"
                onPress={() => editItemById(item.nome)}
              />
            </React.Fragment>
          ) : (
            <Text>Número de cotas: {item.cotas}</Text>
          )}
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    body: {
      margin: 10,
    },
    container: {
      borderRadius: 6,
      elavation: 3,
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.7,
      shadowRadius: 3,
      marginVertical: 7,
      textAlign: "center",
      backgroundColor: "white",
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
    dialogtitle: {
      fontFamily: "Roboto",
    },
  });

  return (
    <BackgroundColorProvider>
    <View style={styles.body}>
      <View>
        <Searchbar
          placeholder="Procurar Fundo"
          onChangeText={onChangeSearch}
          value={searchQuery}
          onIconPress={searchFunction}
        />
        <FlatList
          data={fundosUserList}
          renderItem={renderItem}
          keyExtractor={(item) => item.nome}
        />
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title style={styles.dialogtitle}>
              Fundo não encontrado
            </Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                O nome do fundo que você digitou está incorreto ou o fundo já
                faz parte de sua carteira.
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Fechar</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </View>
    </BackgroundColorProvider>
  );
}

export default Fundos;
