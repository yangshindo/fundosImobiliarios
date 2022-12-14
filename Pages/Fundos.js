import React, { useState, useContext } from "react";
import {
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
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

function Fundos() {
  //state do diálogo responsável por mostrar quando o usuário fez uma pesquisa que não gera retornos, fundo inexistente na DB.
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  //state edição de cotas
  const [cotasValue, setCotasValue] = useState(1);
  const [editCotas, setEditCotas] = useState(false);

  //context
  const { fundosDBList } = useContext(FundosContext);
  const { fundosUserList, setFundosUserList } = useContext(FundosContext);

  //Search Bar state e funções. Componente autocomplete
  const [selectedItem, setSelectedItem] = useState(null);

  function itemSelectDropDown(item) {
    setSelectedItem(item);
  }

  function search() {
    if (selectedItem) {
      const foundItem = fundosUserList.find(
        (item) => item.title === selectedItem.title
      );
      if (foundItem) {
        showDialog();
      } else {
        const fundoSelecionado = fundosDBList.find(
          (item) => item.title === selectedItem.title
        );
        if (fundoSelecionado) {
          setFundosUserList((prevValue) => [...prevValue, fundoSelecionado]);
      }
    }
  }
}

  //delete item
  function deleteItemById(id) {
    const filteredData = fundosUserList.filter((item) => item.title !== id);
    setFundosUserList(filteredData);
  }

  //edit item
  function editItemById(id) {
    let newData = fundosUserList.map((el) => {
      if (el.title === id) return Object.assign({}, el, { cotas: cotasValue });
      return el;
    });

    setFundosUserList(newData);

    setEditCotas(false);
    setCotasValue(1);
  }

  //render item
  function renderItem({ item }) {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.nome}>{item.title}</Text>
          <View style={styles.row}>
            <IconButton
              icon="file-document-edit"
              onPress={() => setEditCotas(item.title)}
            />
            <IconButton
              icon="delete"
              onPress={() => deleteItemById(item.title)}
            />
          </View>
        </View>
        <View style={styles.row}>
          {editCotas === item.title ? (
            <React.Fragment>
              <TextInput
                label="Número de cotas"
                value={cotasValue}
                onChangeText={(cotasValue) => setCotasValue(cotasValue)}
              />
              <IconButton
                icon="arrow-right"
                onPress={() => editItemById(item.title)}
              />
            </React.Fragment>
          ) : (
            <Text>Número de cotas: {item.cotas}</Text>
          )}
        </View>
      </View>
    );
  }

  return (
    <BackgroundColorProvider>
      <View style={styles.body}>
        <View>
          <View style={styles.elevatedElement}>
            <AutocompleteDropdown
              clearOnFocus={false}
              closeOnBlur={true}
              closeOnSubmit={false}
              onSelectItem={(item) => itemSelectDropDown(item)}
              dataSet={fundosDBList}
            />
          </View>
          <Button textColor="black" icon="book-plus" onPress={search}>
            Adicionar Fundo
          </Button>
          <FlatList
            data={fundosUserList}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
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
    backgroundColor: "#b9bdb5",
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
  elevatedElement: {
    zIndex: 3, // works on ios
    elevation: 3, // works on android
    padding: 10,
  },
});

export default Fundos;