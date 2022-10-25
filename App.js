import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';
import FundosContextProvider from "./Contexts/FundosContext";
import Routes from "./Pages/Routes";



export default function App() {
  const styles = StyleSheet.create({
    body: {
      backgroundColor: "#E1FFB1",
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
