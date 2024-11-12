import { useState } from "react";
import { Link } from 'react-router-dom';
import { Login } from "./Login";


export const Header = () => {
  const [showLogin, setLogin] = useState(false);
  

  const handleToggleLogin = () => {
    setLogin((prev) => !prev);
  };
  

  

  return (
    <>
      <header className="flex justify-between items-center sticky top-0 z-10 h-[100px] py-4 px-6 bg-slate-500 text-white font-semibold">
        <h1 className="text-2xl">Voyage Vista</h1>
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/dropdown" className="hover:underline">Destinations</Link>
             
            </li>
            <li>
              <Link to="/tours" className="hover:underline">Tours</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
            <li>
              <Link to="/consignee">Consignee</Link>
            </li>
            <li>
              <button 
                onClick={handleToggleLogin} 
                className="border rounded-3xl border-slate-500 text-slate-500 bg-white py-2 px-4 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-slate-500"
              >
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {showLogin && <Login onClose={handleToggleLogin} />}
     
    </>
  );
};
