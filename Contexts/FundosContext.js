import { useState, createContext } from "react";

export const FundosContext = createContext();

function FundosContextProvider(props) {
  const [fundosDBList, setFundosDBList] = useState([
    { nome: "BLMG11", rendimento: 0.8, recebido: 8.0, cotas: 1, pago: true, janeiro: 1, fevereiro: 1.20, marco: 1.22, abril: 1.33, maio: 0.7, junho: 0.4 },
    { nome: "CPTS11", rendimento: 1.1, recebido: 11.0, cotas: 1, pago: true, janeiro: 0.2, fevereiro: 0.2, marco: 0.2, abril: 0.3, maio: 0, junho: 0.4 },
    { nome: "HGRU11", rendimento: 0.82, recebido: 8.2, cotas: 1, pago: false, janeiro: 0.7, fevereiro: 0.2, marco: 0.9, abril: 2.3, maio: 2, junho: 1.4  },
  ]);

  const [fundosUserList, setFundosUserList] = useState([]);

  const value = {
    fundosDBList,
    setFundosDBList,
    fundosUserList,
    setFundosUserList,
  };

  return (
    <FundosContext.Provider value={value}>
      {props.children}
    </FundosContext.Provider>
  );
}

export default FundosContextProvider;
