import { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "../Firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";

export const FundosContext = createContext();

function FundosContextProvider(props) {
  //armazena data da ultima atualização da lista local que contém todos os fundos
  const [lastUpdate, setLastUpdate] = useState();

  //função para determinar se é necessário atualizar a lista local de todos os fundos
  function isUpdateNeeded() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayString = today.toString();
      if (lastUpdate != todayString) {
        setLastUpdate(todayString)
        AsyncStorage.setItem("LASTUPDATE_VALUE", lastUpdate)
        console.log(
          "o último update foi anterior à hoje. conectando com a base de dados para atualizar... Esta é a data do último update: " +
            lastUpdate
        );
        return true;
      }
      if (fundosDBList.length < 1) {
        setLastUpdate(todayString)
        AsyncStorage.setItem("LASTUPDATE_VALUE", lastUpdate)
        return true;
      } else {
        console.log(
          "o último update é atual, não é necessário atualização. Data do último update: " +
            lastUpdate
        );
        return false;
      }
  }

  //conecta-se com a db cloud para atualizar a lista local de todos os fundos
  function getDBData() {
    if (isUpdateNeeded()) {
      console.log("Call na cloud database");
      onValue(ref(db), (snapshot) => {
        const data = snapshot.val();
        const dataArray = [];
        for (let s in data) {
          for (let ss in data[s]) dataArray.push(data[s][ss]);
        }
        setFundosDBList(dataArray);
        const jsonValue = JSON.stringify(fundosDBList);
        AsyncStorage.setItem("FUNDOSDBLIST_VALUE", jsonValue);
      });
    }
  }

  //placeholder dos dados oriundos da API de fundos imobiliários
  const [fundosDBList, setFundosDBList] = useState([]);

  //fundos personalizados do usuário
  const [fundosUserList, setFundosUserList] = useState([]);

  //valor somado que fica no título do app na home
  const [titleValue, setTitleValue] = useState(0);

  //alinhando o context com o asyncstorage (dados locais persistentes)
  useEffect(() => {
    getDBData();
    const jsonValue = JSON.stringify(fundosUserList);
    AsyncStorage.setItem("FUNDOSUSERLIST_VALUE", jsonValue);
  }, [fundosUserList]);

  //função para somar valores de todos os fundos para exibir no título da tela principal
  function sumValues() {
    const sumArray = [];
    fundosUserList.map((item) => {
      sumArray.push(item.cotas * item.rendimento);
    });
    const sum = sumArray.reduce((partialSum, a) => partialSum + a, 0);
    setTitleValue(sum);
  }

  const value = {
    fundosDBList,
    setFundosDBList,
    fundosUserList,
    setFundosUserList,
    titleValue,
    setTitleValue,
    sumValues,
  };

  return (
    <FundosContext.Provider value={value}>
      {props.children}
    </FundosContext.Provider>
  );
}

export default FundosContextProvider;
