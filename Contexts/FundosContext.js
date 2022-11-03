import { useState, createContext } from "react";

export const FundosContext = createContext();

function FundosContextProvider(props) {
  const [fundosDBList, setFundosDBList] = useState([
    {
      id: 1,
      title: "BLMG11",
      rendimento: 0.84,
      recebido: 25.2,
      cotas: 30,
      pago: 1,
      mes1: 1,
      mes2: 1.2,
      mes3: 1.22,
      mes4: 1.33,
      mes5: 0.7,
      mes6: 0.4,
    },
    {
      id: 2,
      title: "CPTS11",
      rendimento: 1.1,
      recebido: 1.1,
      cotas: 1,
      pago: 1,
      mes1: 0.2,
      mes2: 0.2,
      mes3: 0.2,
      mes4: 0.3,
      mes5: 0.1,
      mes6: 0.4,
    },
    {
      id: 3,
      title: "HGRU11",
      rendimento: 0.82,
      recebido: 1.64,
      cotas: 2,
      pago: 0,
      mes1: 0.7,
      mes2: 0.2,
      mes3: 0.9,
      mes4: 2.3,
      mes5: 2,
      mes6: 1.4,
    },
  ]);

  const [fundosUserList, setFundosUserList] = useState([
    {
      id: 1,
      title: "BLMG11",
      rendimento: 0.84,
      recebido: 25.2,
      cotas: 30,
      pago: 1,
      mes1: 1,
      mes2: 1.2,
      mes3: 1.22,
      mes4: 1.33,
      mes5: 0.7,
      mes6: 0.4,
    },
    {
      id: 2,
      title: "CPTS11",
      rendimento: 1.1,
      recebido: 1.1,
      cotas: 1,
      pago: 1,
      mes1: 0.2,
      mes2: 0.2,
      mes3: 0.2,
      mes4: 0.3,
      mes5: 0,
      mes6: 0.4,
    },
  ]);

  const [titleValue, setTitleValue] = useState("0,00");

  //função para somar valores de todos os fundos para exibir no título da tela principal
  function sumValues() {
    const sumArray = [];
    fundosUserList.map((item) => {
      if (item.pago === 1) {
        sumArray.push(item.cotas * item.rendimento);
      }
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
