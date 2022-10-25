import { Text, View, StyleSheet, Picker } from "react-native";
import { useState, useContext } from "react"
import { LineChart } from "react-native-chart-kit";
import { FundosContext } from "../Contexts/FundosContext";
import BackgroundColorProvider from "../Components/BackgroundColorProvider";

function Graficos() {
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

  const [selectedValue, setSelectedValue] = useState();

  const fundosUserList = useContext(FundosContext)

  const fundosArray = fundosUserList.toArray()
  const selectOption = fundosArray.map((fundo) => <Picker.Item lab={fundo.nome} value={fundo.nome} />)

  function SelectorPicker() {
    return(
        <View >
        <Picker
          selectedValue={selectedValue}
          style={{ height: 30, width: 150}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
            {selectOption}
        </Picker>
      </View>
    )
  }

  return (
    <BackgroundColorProvider>
    <View style={styles.body}>
      <Text style={styles.title}>Histórico de Rendimento</Text>
      <LineChart
        data={{
          labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
          datasets: [
            {
              data: [3, 4.31, 7, 5, 0, 3],
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

export default Graficos;
