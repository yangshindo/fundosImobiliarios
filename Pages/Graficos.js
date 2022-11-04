import { Text, View, StyleSheet, Picker } from "react-native";
import { useState, useContext } from "react";
import { Button, Menu } from "react-native-paper";

import { FundosContext } from "../Contexts/FundosContext";
import BackgroundColorProvider from "../Components/BackgroundColorProvider";
import Chart from "../Components/Chart";

function Graficos() {
  // Context
  const { fundosUserList } = useContext(FundosContext);

  // Select state, render item e functional component
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);
  const [selectedValue, setSelectedValue] = useState(fundosUserList[0]);
  const [chartData, setChartData] = useState();

  const menuOption = fundosUserList.map((el) => (
    <Menu.Item
      title={el.title}
      key={el.title}
      onPress={() => onValueChage(el)}
    />
  ));

  function onValueChage(el) {
    setSelectedValue(el);
    const item = fundosUserList.find((i) => i === el);
    if (item) {
      setChartData([
        item.mes1,
        item.mes2,
        item.mes3,
        item.mes4,
        item.mes5,
        item.mes6,
      ]);
    }
    closeMenu();
  }

  return (
    <BackgroundColorProvider>
      <View style={styles.body}>
        <View style={styles.box}>
          <Text style={styles.boxtext}>
            Selecione um fundo para acompanhar o histórico de rendimento nos
            últimos 6 meses{" "}
          </Text>
          <Menu
            visible={menuVisible}
            style={styles.menuOutside}
            contentStyle={styles.menuInside}
            onDismiss={closeMenu}
            anchor={
              <Button
                icon={"form-select"}
                textColor="#104a07"
                buttonColor="#f8ffc7"
                onPress={openMenu}
                mode="outlined"
              >
                Selecionar
              </Button>
            }
          >
            {menuOption}
          </Menu>
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
  boxtext: {
    padding: 10,
    fontSize: 18,
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
    margin: 30,
  },
  menuOutside: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 50,
    paddingLeft: 85
  },
  menuInside: {
    backgroundColor: "#f8ffc7",
  }
});

export default Graficos;
