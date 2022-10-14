import Home from "./Pages/Home";
import { SafeAreaView, StyleSheet, StatusBar} from "react-native-web";
import BottomNav from "./Components/BottomNav";

export default function App() {
  const styles = StyleSheet.create({
    body: {
        backgroundColor: '#E1FFB1',
    },
  });

  return (
    <SafeAreaView style={styles.body}>
      <StatusBar />
    <Home />
    <BottomNav />
    </SafeAreaView>
  );


}

