import { useContext, useState } from "react";
import UserContext from "../context/userContext";

const ProductComp = () => {
  const { setProduct, setQty, setRate } = useContext(UserContext);

  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const invoiceAddHandler = () => {
   if(!productName || ! quantity || !price){
        alert("all fields are reqruired")
        return
   }
   setProduct(productName);
   setQty(parseInt(quantity));
   setRate(parseInt(price));
   setProductName("");
   setQuantity("");
   setPrice("");
  };
  return (
    <div className="flex justify-center flex-col items-center h-scree w-1/2">
      <div className="flex justify-between items-center mb-10 w-2/3">
        <label htmlFor="productname">ProductName</label>
        <input
          className="w-96 h-12 bg-gray-200"
          type="text"
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
      </div>
      <div className="flex justify-between mb-10 items-center w-2/3">
        <label htmlFor="productqty">Quantity</label>
        <input
          className="w-96 h-12 bg-gray-200"
          type="number"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
        />
      </div>
      <div className="flex items-center w-2/3 justify-between">
        <label htmlFor="productrate">Price</label>
        <input
          className="w-96 h-12 bg-gray-200"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <div className="w-2/3 mt-10 ">
        <button
          className="bg-blue-400 w-full text-white  h-10"
          onClick={invoiceAddHandler}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductComp;
