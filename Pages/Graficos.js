import { Text, View, StyleSheet, Picker, Button } from "react-native";
import { useState, useContext } from "react"
import { LineChart } from "react-native-chart-kit";
import { FundosContext } from "../Contexts/FundosContext";
import BackgroundColorProvider from "../Components/BackgroundColorProvider";
import { select } from "@react-native-material/core";

function Graficos() {

  const { fundosUserList, fundosDBList } = useContext(FundosContext)

  const [selectedValue, setSelectedValue] = useState();
  const [chartValue, setChartValue] = useState()

  const selectOption = fundosUserList.map((fundo) => <Picker.Item label={fundo.title} value={fundo.title} key={fundo.title} />)


  function SelectorPicker() {
    return(
        <View style={styles.picker}>
        <Picker
          selected={selectedValue}
          style={{ height: 30, width: 100, textAlign: "center" }}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
           {selectOption}
        </Picker>
      </View>
    )
  }

  /*
  function chartGenerator(itemValue) {
    const chartItem = (fundosDBList.find((item) => item.title === selectedValue))
    setChartValue([chartItem.janeiro, chartItem.fevereiro, chartItem.marco, chartItem.abril, chartItem.maio, chartItem.junho])
    console.log(chartValue[0])
  }
  */



  return (
    <BackgroundColorProvider>
    <View style={styles.body}>
    <View style={styles.box}>
    <Text style={styles.selecionarfundo}>Fundo </Text>

      <SelectorPicker />
      </View>
      <Text style={styles.title}>Histórico de Rendimento</Text>
      <LineChart
        data={{
          labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          datasets: [
            {
              data: [0.80, 1.11, 0.97, 0.91, 0.90, 0.89, 1.02, 1.11, 0.97, 0.96, 0.84, 0.88]
            },
          ],
        }}
        width={350} // from react-native
        height={450}
        yAxisLabel="R$"
        chartConfig={{
          backgroundColor: "#61855a",
          backgroundGradientFrom: "#61855a",
          backgroundGradientTo: "#7ea177",
          color: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#7ea177",
          },
        }}
      />
 
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
    fontSize: 17,
    fontWeight: 500,
    textAlign: "center",
    color: "#104a07",
    fontFamily: "Roboto",
    fontWeight: 550
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
    padding: 10
  }
});

export default Graficos;
