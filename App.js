import { Provider as PaperProvider } from "react-native-paper";
import FundosContextProvider from "./Contexts/FundosContext";
import Routes from "./Pages/Routes";


export default function App() {
  require('dotenv').config()
console.log(process.env)

  return (
    <FundosContextProvider>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </FundosContextProvider>
  );
}
