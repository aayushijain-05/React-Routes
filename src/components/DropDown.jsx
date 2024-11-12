import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const closeDropdown = (event) => {
    if (event.target.closest('.dropdown') === null) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div className="relative inline-block text-left dropdown">
      <button
        onClick={toggleDropdown}
        className="hover:underline focus:outline-none"
      >
        Destinations
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <div className="py-1" role="menu">
            <Link to="/destinations/europe" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Europe</Link>
            <Link to="/destinations/asia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Asia</Link>
            <Link to="/destinations/americas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Americas</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
