/* eslint-disable react/prop-types */

import { Input } from "./Input";
import { Label } from "./Label";

export const Login = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 my-20 mx-40">
      <div className="bg-[url('/img/img10.jpg')] bg-cover bg-center h-[400px] w-[300px] p-6 shadow-lg rounded"> 
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
          ✖
        </button>
        <h2 className="text-2xl mb-4 text-white">Login</h2>
        <form>
          <div className="mb-4">
            <Label type={"Email"} className="text-white"/>
            <Input 
              type={"Email" }

              placeholder={"Enter your Email"} 
              className="border rounded w-full py-2 px-3" 
            />
          </div>
          <div className="mb-4">
            <Label type={"Password"} className="text-white" />
            <Input 
              type={"password"} 
              placeholder={"Enter your Password" }
              className="border rounded w-full py-2 px-3" 
            />
          </div><br></br>
          <button 
            type="submit" 
            className="bg-blue-500 text-white py-2 px-4 rounded w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
