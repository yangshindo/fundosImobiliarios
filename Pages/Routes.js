import Home from "./Home";
import Fundos from "./Fundos";
import Graficos from "./Graficos";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Fundos') {
              iconName = focused ? 'briefcase' : 'briefcase-outline';
            }
            else if (route.name === 'Gráficos') {
                iconName = focused ? 'stats-chart' : 'stats-chart-outline';
              }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={25} color={color} />;
          }
        })}  
      >
        <Tab.Screen name={"Home"} component={Home} />
        <Tab.Screen name={"Fundos"} component={Fundos} />
        <Tab.Screen name={"Gráficos"} component={Graficos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
