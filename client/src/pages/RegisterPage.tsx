import { useState } from "react";
import RegisterComp from "../components/RegisterComp";
import LoginComp from "../components/LoginComp";

const RegisterPage = () => {
  const [componentRender, setComponentRender] = useState<boolean>(false);

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
