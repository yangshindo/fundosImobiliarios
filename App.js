import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { useEffect } from "react";
import FundosContextProvider from "./Contexts/FundosContext";
import Routes from "./Pages/Routes";


export default function App() {
  
  useEffect(() => {
    AsyncStorage.getItem('FUNDOSUSERLIST_VALUE').then((value) => {
      if (value) {
        console.log(value)
      }
    });
  }, []);


  const styles = StyleSheet.create({
    body: {
      backgroundColor: "#f8ffc7",
    },
  });

  return (
    <FundosContextProvider>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </FundosContextProvider>
  );
}
