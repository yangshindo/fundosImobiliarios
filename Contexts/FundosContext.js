import { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from '../Firebase/firebaseConfig'
import { set, ref, onValue, remove, update } from "firebase/database";

export const FundosContext = createContext();

function FundosContextProvider(props) {

  const [lastUpdate, setLastUpdate] = useState()
  
  //Importa todos os dados da Firebase (Realtime) e salva no asyncstorage para diminuir requests na API
  function getDBData() {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      const dataArray = []
      for (let s in data) {
        for (let ss in data[s])
          dataArray.push(data[s][ss]);
      }
      setFundosDBList(dataArray)
      const jsonValueDB = JSON.stringify(fundosDBList)
      AsyncStorage.setItem("FUNDOSDBLIST_VALUE", jsonValueDB)
    });
  }


  // DEBUG THIS
  function updateDB() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    console.log(today)
    if (!lastUpdate) {
      setLastUpdate(today)
      return true
    } else {
      if (lastUpdate < today) {
        return true
      } else {
        return false
      }
    }
  }

  //placeholder dos dados oriundos da API de fundos imobiliários
  const [fundosDBList, setFundosDBList] = useState([]);

  //fundos personalizados do usuário
  const [fundosUserList, setFundosUserList] = useState([]);

  //valor somado que fica no título do app na home
  const [titleValue, setTitleValue] = useState("0,00");

  //alinhando o context com o asyncstorage (dados locais persistentes)

  useEffect(() => {
 
    getDBData()
    const jsonValueUser = JSON.stringify(fundosUserList);
    AsyncStorage.setItem("FUNDOSUSERLIST_VALUE", jsonValueUser);
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
