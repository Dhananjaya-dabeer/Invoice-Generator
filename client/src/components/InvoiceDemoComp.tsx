import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";
import axios from "axios";

const InvoiceDemoComp = () => {
  const [isuserVerified, setisUserVerified] = useState<boolean>();
  const navigate = useNavigate();
  const { product, qty, rate } = useContext(UserContext);
  const userid = localStorage.getItem("userId");
  const total: number =
    qty.length &&
    rate.length &&
    qty
      .map((quantity, index) => quantity * rate[index])
      .reduce((acc, curr) => acc + curr);
  const invoiceGenerateHandler = async () => {
    try {
      const invoiceData = await axios.post(
        `http://localhost:3001/api/v2/data/invoice`,
        { userid, product, qty, rate },
        {
          responseType: 'blob', // Set the response type to 'blob' to handle binary data
        }
      );
  
      // Create a Blob object from the response data
      const blob = new Blob([invoiceData.data], { type: 'application/pdf' });
  
      // Create a URL for the Blob object
      const url = window.URL.createObjectURL(blob);
  
      // Create a link element to trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Invoice.pdf');
      
      // Trigger the download
      document.body.appendChild(link);
      link.click();
  
      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);
    }
  };
  const logOutHandler = () => {
    localStorage.clear();
    setisUserVerified(false);
    navigate("/");
  };
  const token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      try {
        const userVerification = await axios.get(
          "http://localhost:3001/api/v1/user/jwtverify",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        if (!(userVerification.data.status == "User verified")) {
          setisUserVerified(false);
          navigate("/");
        } else {
          setisUserVerified(true);
        }
      } catch (error) {}
    })();
  }, [isuserVerified]);

  return (
    <div className="w-1/2 pr-10">
      {isuserVerified && (
        <div className="flex justify-end mt-5">
          <button
            className="bg-red-300 w-20 text-white rounded-lg"
            onClick={logOutHandler}
          >
            Logout
          </button>
        </div>
      )}
      <div className="flex justify-center items-center flex-col ">
        <h1 className="text-3xl">The invoice would like below.</h1>
        <h4>
          it is not exactly the incoice look like it is just data which will be
          in the invoice
        </h4>
      </div>
      <div className="flex justify-end mt-10">
        <button
          className="bg-blue-400 w-40 text-white rounded-xl h-10"
          onClick={invoiceGenerateHandler}
        >
          Generate Invoice
        </button>
      </div>
      <div className="flex  justify-between mt-20  ">
        <div>
          <h3>Product</h3>
          {product &&
            product.length &&
            product.map((item) => (
              <div key={item} className="flex flex-col items-center">
                <p>{item}</p>
              </div>
            ))}
        </div>
        <div>
          <h3>Qty</h3>
          {qty.length &&
            qty.map((item) => (
              <div key={item} className="flex flex-col items-center">
                <p>{item}</p>
              </div>
            ))}
        </div>
        <div>
          <h3>Rate</h3>
          {rate.length &&
            rate.map((item) => (
              <div key={item} className="flex flex-col items-center">
                <p>{item}</p>
              </div>
            ))}
        </div>
        <div>
          <h3>Total</h3>
          {rate.length &&
            qty.length &&
            rate.map((rate, index) => (
              <div>
                <p>INR {(rate * qty[index]).toLocaleString()}</p>
              </div>
            ))}
        </div>
      </div>
      <div className=" mt-40 flex flex-col items-end mr-10">
        <div className=" flex justify-between w-40 items-center">
          <p>Total</p>
          <p>{total && total.toLocaleString()}</p>
        </div>
        <div className="flex justify-between w-40 items-center">
          <p>GST</p>
          <p>18%</p>
        </div>
        <div className="flex justify-between w-40 items-center">
          <p>GrandTotal</p>
          <p>{total && (total + total * 0.18).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDemoComp;
