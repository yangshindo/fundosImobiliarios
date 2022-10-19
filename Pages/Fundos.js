import { useState, useContext } from 'react';
import { Searchbar, FAB } from 'react-native-paper';
import { FundosContext } from '../Contexts/FundosContext'
import { StyleSheet, Text, View } from "react-native";


function Fundos() {
  const [searchQuery, setSearchQuery] = useState('');
  const {fundosDummyList} = useContext(FundosContext)

  function onChangeSearch(query) {setSearchQuery(query)};

  function searchFunction() {
    fundosDummyList.find((element) => element === query)
  }

  const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 0,
      right: 0,
      bottom: 0,
    },
  })

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
    onPress={() => console.log('Pressed')}
  />
    </View>
  );
  
};




export default Fundos;