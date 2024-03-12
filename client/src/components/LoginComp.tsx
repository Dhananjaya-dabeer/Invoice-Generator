import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoginComp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate()
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const HandleLogin = async () => {
    if (!email || !password) {
      alert("All fields are required");
      return;
    }
    if (emailRegex.test(email)) {
      if (!(password.length < 8)) {
        try {
          const userDetails = await axios.post(
            `http://localhost:3001/api/v1/user/login`,
            { email, password }
          );
           
          userDetails.data && alert(userDetails.data.message);
          navigate("/products")
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
    <div className="flex justify-center items-center h-2/3 w-3/6 bg-white bg-opacity-80">
      <div>
        <div className=" mb-6 text-custom-grey flex flex-col justify-center items-center">
          <h1 className="text-5xl">Your Mart</h1>
          <h3 className="text-xl">Login</h3>
        </div>
        <div className="mb-7 w-auto">
          <input
            className="w-96 h-12 bg-gray-200"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <input
            className="w-96 h-12 bg-gray-200"
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
            className="bg-custom-grey text-white w-96 h-12"
            onClick={() => HandleLogin()}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
