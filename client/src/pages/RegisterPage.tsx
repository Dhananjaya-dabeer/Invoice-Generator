import { useState,useEffect } from "react";
import RegisterComp from "../components/RegisterComp";
import LoginComp from "../components/LoginComp";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [componentRender, setComponentRender] = useState<boolean>(false);
  const navigate = useNavigate();
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
        console.log(userVerification.data.status);
        if (userVerification.data.status == "User verified") {
          navigate("/products");
        }
      } catch (error) {
        console.log(error)
      }
    })();
  }, []);
  return (
    <div
      className="bg-no-repeat  bg-cover bg-center h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('https://i.ibb.co/VSk3WXh/image.png')" }}
    >
      {componentRender ? <RegisterComp /> : <LoginComp />}
      <div className="flex items-center justify-center w-3/6 bg-white opacity-80 p-5">
        {componentRender ? (
          <p className="cursor-pointer">
            Alreday have an account{" "}
            <a
              className="underline text-blue-400"
              onClick={() => setComponentRender(!componentRender)}
            >
              Login
            </a>{" "}
            here{" "}
          </p>
        ) : (
          <p className="cursor-pointer">
            Don't have an account{" "}
            <a
              className="underline text-blue-400"
              onClick={() => setComponentRender(!componentRender)}
            >
              register
            </a>{" "}
            here{" "}
          </p>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
