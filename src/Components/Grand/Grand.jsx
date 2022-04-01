import React, { createContext, useState } from "react";
import Parent from "../Parent/Parent";

export const BasicAPI = createContext("something");

const Grand = () => {
  const [count, setCount] = useState(0);
  const dynamicValue = "Life is Test";
  return (
    <BasicAPI.Provider value={[count, setCount, dynamicValue]}>
      <div  className="div">
              <h1>Grand Compo</h1>
              <Parent/>
      </div>
    </BasicAPI.Provider>
  );
};

export default Grand;
