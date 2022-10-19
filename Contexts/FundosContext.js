import { useState, createContext } from "react";

export const FundosContext = createContext();

function FundosContextProvider(props) {
  const [fundosDummyList, setFundosDummyList] = useState([
    { nome: "BLMG11", rendimento: 0.8, recebido: 8.0, cotas: 1, pago: true },
    { nome: "CPTS11", rendimento: 1.1, recebido: 11.0, cotas: 2, pago: true },
    { nome: "HGRU11", rendimento: 0.82, recebido: 8.2, cotas: 5, pago: false },
  ]);

  const value = { fundosDummyList, setFundosDummyList};

  return (
    <FundosContext.Provider value={value}>
      {props.children}
    </FundosContext.Provider>
  );
}

export default FundosContextProvider;