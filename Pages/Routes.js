import Home from "./Home";
import Fundos from "./Fundos";
import Graficos from "./Graficos";
import { StyleSheet } from "react-native-web";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useContext } from "react";
import { FundosContext } from "../Contexts/FundosContext";

const Tab = createMaterialBottomTabNavigator();

function Routes() {
  //Context
  const { sumValues } = useContext(FundosContext);

  const styles = StyleSheet.create({
    body: {
      margin: 10,
      backgroundColor: "#f8ffc7",
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Fundos") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "Gráficos") {
              iconName = focused ? "stats-chart" : "stats-chart-outline";
            }

            // Retorna qualquer componente desejado
            return <Ionicons name={iconName} size={25} color={color} />;
          },
        })}
      >
        <Tab.Screen name={"Home"} component={Home} onPress={sumValues()} />
        <Tab.Screen name={"Fundos"} component={Fundos} />
        <Tab.Screen name={"Gráficos"} component={Graficos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
