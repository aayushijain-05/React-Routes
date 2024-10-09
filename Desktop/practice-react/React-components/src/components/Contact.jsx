import { Label } from "./Label";
import { Input } from "./Input";
import { DatePicker } from "./DatePicker";
import { TextArea } from "./TextArea";
import { CheckBox } from "./CheckBox";
import { Radio } from "./Radio";
import { Select } from "./Select";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Contact = () => {
  return (
    <div>
        <Header/>
    <div className="max-w-md mx-auto p-6 my-6 bg-slate-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Contact Us</h2>
      <form className="text-black space-y-6">
        <div className="mb-4">
          <Label type={"Name"} />
          <Input 
            type={"text"} 
            placeholder={"Enter your Name"} 
            className="border border-gray-300 rounded w-full py-2 px-3 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300" 
          />
        </div>
        <div className="mb-4">
          <Label type={"Email"} />
          <Input 
            type={"email"} 
            placeholder={"Enter your Email"} 
            className="border border-gray-300 rounded w-full py-2 px-3 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300" 
          />
        </div>
        <div className="mb-4">
          
          <Select className="border border-gray-300 rounded w-full py-2 px-3 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300" />
        </div>
        <div className="mb-4">
         
          <Radio />
        </div>
        <div className="mb-4">
          <Label type={"Date"} />
          <DatePicker className="border border-gray-300 rounded w-full py-2 px-3 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300" />
        </div>
        <div className="mb-4">
          <Label type={"Message"} />
          <TextArea className="border border-gray-300 rounded w-full py-2 px-3 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300" />
        </div>
        <div className="mb-4">
          <CheckBox />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white py-3 px-4 rounded-lg w-full transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};
