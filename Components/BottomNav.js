import { useState } from "react";
import { BottomNavigation, Text } from 'react-native-paper';


function BottomNav({ navigation }) { 

  const [index, setIndex] = useState(0);

const HomeRoute = () => <Text onPress={() => navigation.navigate(Home)}>Início</Text>;

const FundosRoute = () => <Text onPress={() => navigation.navigate(Fundos)}>Fundos</Text>;

const CompararRoute = () => <Text onPress={() => navigation.navigate(Graficos)}>Comparar</Text>;


  const [routes] = useState([

    { key: 'home', title: "Principal", focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'fundos', title: 'Fundos', focusedIcon: 'folder', unfocusedIcon: 'folder-outline'},
    { key: 'comparar', title: 'Comparar', focusedIcon: 'chart-line', },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    fundos: FundosRoute,
    comparar: CompararRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: "#94B49F" }}
    />
  );

}

export default BottomNav;
