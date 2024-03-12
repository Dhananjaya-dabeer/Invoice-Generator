import { ReactNode, useState } from "react";
import UserContext from "./userContext";

const UserCotextProvider = ({ children }: { children: ReactNode }) => {
  const [product, setProduct] = useState<string>("");
  const [qty, setQty] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const contextValue = {
    product,
    setProduct,
    qty,
    setQty,
    rate,
    setRate,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserCotextProvider;
