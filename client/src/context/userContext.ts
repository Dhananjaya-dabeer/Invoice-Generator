import React from "react";
type ContextType = {
  product: string[];
  setProduct: (value: string[]) => void;
  qty: number[];
  setQty: (value: number[]) => void;
  rate: number[];
  setRate: (value: number[]) => void;
};

const UserContext = React.createContext<ContextType>({
  product: [],
  setProduct: () => {},
  qty: [],
  setQty: () => {},
  rate: [],
  setRate: () => {},
});

export default UserContext;
