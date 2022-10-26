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

  const selectOption = fundosUserList.map((fundo) => <Picker.Item label={fundo.nome} value={fundo.nome} key={fundo.nome} />)


  function SelectorPicker() {
    return(
        <View >
        <Picker
          selected={selectedValue}
          style={{ height: 30, width: 150}}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
           {selectOption}
        </Picker>
        <Button onPress={chartGenerator}></Button>
      </View>
    )
  }

  function chartGenerator(itemValue) {
    const chartItem = (fundosDBList.find((item) => item.nome === selectedValue))
    setChartValue([chartItem.janeiro, chartItem.fevereiro, chartItem.marco, chartItem.abril, chartItem.maio, chartItem.junho])
    console.log(chartValue[0])
  }



  return (
    <BackgroundColorProvider>
    <View style={styles.body}>
      <SelectorPicker />
      <Text style={styles.title}>Histórico de Rendimento</Text>
      <LineChart
        data={{
          labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
          datasets: [
            {
              data: [1, 2, 3, 4, 5, 6]
            },
          ],
        }}
        width={350} // from react-native
        height={350}
        yAxisLabel="R$"
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          color: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
      />
    </View>
    </BackgroundColorProvider>
  );
}


const styles = StyleSheet.create({
  body: {
    margin: 10,
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  title: {
    margin: 10,
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    color: "#104a07",
  },
});

export default Graficos;
