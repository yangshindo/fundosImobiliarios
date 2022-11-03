import { LineChart } from "react-native-chart-kit";
import { View } from "react-native";

function Chart(props) {
  let data = props.data;

  return (
    <View>
      <LineChart
        data={{
          labels: ["1", "2", "3", "4", "5", "6"],
          datasets: [
            {
              data: data,
            },
          ],
        }}
        width={350}
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
  );
}

export default Chart;
