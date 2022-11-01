import { Text, View, StyleSheet, Picker } from "react-native";
import { useState, useContext } from "react";
import { Button } from 'react-native-paper'

import { FundosContext } from "../Contexts/FundosContext";
import BackgroundColorProvider from "../Components/BackgroundColorProvider";
import Chart from "../Components/Chart";

function Graficos() {
  // Context
  const { fundosUserList } = useContext(FundosContext);

  // Select / Picker state, render item e functional component
  const [selectedValue, setSelectedValue] = useState(fundosUserList[0].title);
  const [chartData, setChartData] = useState()

  const selectOption = fundosUserList.map((fundo) => (
    <Picker.Item label={fundo.title} value={fundo.title} key={fundo.title} />
  ));

  function onValueChage() {
    const item = fundosUserList.find((i) => i.title === selectedValue)
    console.log(item)
    setChartData([item.mes1, item.mes2, item.mes3, item.mes4, item.mes5, item.mes6])
  }

  function SelectorPicker() {
    return (
      <View style={styles.picker}>
        <Picker
          style={{textAlign: "center" }}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          {selectOption}
        </Picker>
        
      </View>
    );
  }

     /*
    const item = fundosUserList.find((i) => i.name === selectedValue)
    let chartData = [item.mes1, item.mes2, item.mes3, item.mes4, item.mes5, item.mes6]
    */



  return (
    <BackgroundColorProvider>
      <View style={styles.body}>
        <View style={styles.box}>
          <Text style={styles.selecionarfundo}>Selecione um fundo para acompanhar o histórico de rendimento nos últimos 6 meses </Text>
          <SelectorPicker />
          <Button icon={'form-select'} textColor="#104a07" onPress={onValueChage}>Selecionar Fundo</Button>
        </View>
       
        <Text style={styles.title}>Histórico de Rendimento</Text>
        {chartData ? <Chart data={chartData} /> : null}
      </View>
    </BackgroundColorProvider>
  );
}

const styles = StyleSheet.create({
  body: {
    border: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    margin: 20,
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    color: "#104a07",
  },
  selecionarfundo: {
    fontSize: 14,
    fontWeight: 500,
    textAlign: "center",
    color: "#104a07",
    fontFamily: "Arial",
    fontWeight: 250,
  },
  picker: {
    margin: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  box: {
    borderRadius: 6,
    elavation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    marginVertical: 7,
    textAlign: "center",
    backgroundColor: "#7ea177",
    padding: 20,
    margin: 30
  },
});

export default Graficos;
