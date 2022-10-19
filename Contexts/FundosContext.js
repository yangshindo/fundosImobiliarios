import { useState, createContext } from "react";

export const FundosContext = createContext();

function FundosContextProvider(props) {
  const [fundosDummyList, setFundosDummyList] = useState();


  const value = { fundosDummyList, setFundosDummyList};

  return (
    <FundosContext.Provider value={value}>
      {props.children}
    </FundosContext.Provider>
  );
}

export default FundosContextProvider;