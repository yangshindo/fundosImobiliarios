import { StyleSheet, Text, View } from "react-native";
import CardList from "../Components/CardList";
import BackgroundColorProvider from "../Components/BackgroundColorProvider";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

function Home() {
  const d = new Date();
  const currentMonth = d
    .toLocaleString("default", { month: "long" })
    .toString()
    .toUpperCase();
  const currentYear = d.getFullYear().toString();

  const styles = StyleSheet.create({
    body: {
      margin: 10,
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    cardListView: {
      paddingHorizontal: 22,
    },
    proventosText: {
      marginTop: 10,
      fontSize: 14,
      fontWeight: 500,
      textAlign: "center",
      color: "#104a07",
    },
    proventosValue: {
      fontSize: 80,
      fontFamily: "Impact",
      fontWeight: 300,
      color: "#104a07",
      paddingTop: 1,
      paddingBottom: 4,
    },
  });

  return (
    <BackgroundColorProvider>
    <View style={styles.body}>
      <View style={styles.container}>
        <Icon name="cash-multiple" size={30} color="#104a07" />
        <Text style={styles.proventosText}>
          PROVENTOS DE {currentMonth} DE {currentYear}{" "}
        </Text>
        <Text style={styles.proventosValue}>R$ 27,02</Text>
      </View>
      <View style={styles.cardListView}>
        <CardList />
      </View>
    </View>
    </BackgroundColorProvider>
  );
}

export default Home;
