export const Footer = () => {
    return (
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-700">
            &copy; {new Date().getFullYear()} My Travel Website. All rights reserved.
          </p>
          <nav>
            <ul className="flex justify-center space-x-4 mt-2">
              <li>
                <a href="#home" className="text-blue-600 hover:underline">Home</a>
              </li>
              <li>
                <a href="#about" className="text-blue-600 hover:underline">About</a>
              </li>
              <li>
                <a href="#contact" className="text-blue-600 hover:underline">Contact</a>
              </li>
              <li>
                <a href="#privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  };
  