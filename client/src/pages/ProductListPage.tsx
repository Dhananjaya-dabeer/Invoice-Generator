import { useEffect } from "react";
import InvoiceDemoComp from "../components/InvoiceDemoComp";
import ProductComp from "../components/ProductComp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ProductListPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      try {
        const userVerification = await axios.get(
          "https://invoice-generator-fh97.onrender.com/api/v1/user/jwtverify",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(userVerification.data.status);
        if (!(userVerification.data.status == "User verified")) {
          navigate("/");
        }
      } catch (error) {}
    })();
  }, []);
  return (
    <div className="bg-no-repeat  h-screen flex">
      <ProductComp />
      <InvoiceDemoComp />
    </div>
  );
};

export default ProductListPage;
