import Home from "./Pages/Home";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native-web";
import { Provider as PaperProvider } from 'react-native-paper';
import BottomNav from "./Components/BottomNav";
import FundosContextProvider from "./Contexts/FundosContext";
import Fundos from "./Pages/Fundos";

export default function App() {
  const styles = StyleSheet.create({
    body: {
      backgroundColor: "#E1FFB1",
    },
  });

  return (
    <SafeAreaView style={styles.body}>
      <StatusBar />
      <FundosContextProvider>
        <PaperProvider>
        <Fundos />
        <BottomNav />
        </PaperProvider>
      </FundosContextProvider>
    </SafeAreaView>
  );
}
