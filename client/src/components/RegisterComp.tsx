import { useState } from "react";

import axios from "axios";
const RegisterComp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const HandleRegister = async () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }
    if (emailRegex.test(email)) {
      if (!(password.length < 8)) {
        try {
          const userDetails = await axios.post(
            `http://localhost:3001/api/v1/user/register`,
            { name, email, password }
          );
          userDetails.data && alert(userDetails.data.message);
          if (userDetails.data && userDetails.data.status == "Success") {
            setName("");
            setEmail("");
            setPassword("");
          }
        } catch (error) {
          console.log("fetch error", error);
        }
      } else {
        alert("Password length should be atleast 8");
      }
    } else {
      alert("Please enter valid email id");
    }
  };
  // console.log(name, email, password);
  return (
    <div className="flex justify-center items-center w-3/6 bg-white bg-opacity-80">
      <div>
        <div className=" mb-6 text-custom-grey flex flex-col justify-center items-center">
          <h1 className="text-5xl">Invoice Genrator</h1>
          <h3 className="text-xl">Register</h3>
        </div>
        <div className="mb-7 w-auto">
          <input
            className="w-full h-12 bg-gray-200 md:w-80"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-7 w-auto">
          <input
            className="w-full h-12 bg-gray-200 md:w-80"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <input
            className="w-full h-12 bg-gray-200 md:w-80"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="mt-4 mb-5 flex justify-center">
          <input
            type="checkbox"
            id="check_box"
            onInput={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="check_box">Show Password</label>
        </div>

        <div className="mt-10 flex justify-center items-center ">
          <button
            className="bg-custom-grey text-white w-full h-12 md:w-80"
            onClick={() => HandleRegister()}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterComp;
