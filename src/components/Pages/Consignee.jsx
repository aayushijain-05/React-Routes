import { Header } from "../Header";
import { Footer } from "../Footer";
import { useState } from "react";

const countries = [
  { name: 'India', states: ['Maharashtra', 'Punjab', 'Haryana', 'Uttar Pradesh'] },
  { name: 'USA', states: ['Florida', 'Georgia', 'Alaska', 'California'] },
  { name: 'UK', states: ['England', 'Scotland', 'Wales', 'Northern Ireland'] },
];

export const Consignee = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [email, setEmail] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [landmark, setLandmark] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [city, setCity] = useState('');
  const [pin, setPin] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const[valid ,setValid]=useState(false);
  
  const [errors, setErrors] = useState({});

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState('');
  };

  const handleValidation = () => {
    const newErrors = {};
    if (!firstname) newErrors.firstname = "First Name is required.";
    if (!lastname) newErrors.lastname = "Last Name is required.";
    if (!mobilenumber) {
      newErrors.mobilenumber = "Mobile Number is required.";
    } 
    else if (mobilenumber.length !== 10) {
      newErrors.mobilenumber = "Mobile Number must be exactly 10 digits.";
    }
    if (!email) {
      newErrors.email = "Email Address is required.";
    } else {
      const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegEx.test(email)) newErrors.email = "Email is not valid.";
    }
  

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

 

 

  const handleNext= () => {
    if (handleValidation() ) {
          setIsConfirm(true);
          setIsTransitioning(true);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 300);
    }
  };
  
  const handlePrev=()=>{
        setValid(!valid);
        setIsTransitioning(true);
        setIsConfirm(false);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300); 
      
      
    };

  

  const handleChange = (e) => {
    e.preventDefault();
    if ((handleValidation )) {
      console.log({
        firstname,
        lastname,
        mobilenumber,
        email,
        address1,
        address2,
        landmark,
        selectedCountry,
        selectedState,
        city,
        pin,
      });
    }
    
  };

  return (
    <div>
      <Header />
      <div className="max-w-2xl mx-auto my-4 p-6 bg-white shadow-md rounded-lg">
        <div className="flex items-center mb-6">
          <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">2</span>
          <h2 className="text-lg font-semibold">Consignee Details</h2>
        </div>

        <button
          onClick={toggleAccordion}
          className="w-full text-left bg-gray-100 p-3 rounded-lg font-semibold"
        >
          {isOpen ? "Hide Consignee Details" : "Show Consignee Details"}
        </button>

        {isOpen && (
          <form onSubmit={handleChange}>
            <div className={`transform transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              {!isConfirm ? (
                <div className="space-y-6 p-4 bg-gray-50 rounded-lg mt-2">
                  <div className="font-semibold text-gray-800">Personal Details</div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                      <input type="text" key="first" placeholder="Enter First Name . . ." onChange={(e) => setFirstname(e.target.value)} className="border border-gray-300 p-3 rounded w-full" />
                      {errors.firstname && <p className="text-red-500 text-xs">{errors.firstname}</p>}
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                      <input type="text" key="last" placeholder="Enter Last Name . . ." onChange={(e) => setLastname(e.target.value)} className="border border-gray-300 p-3 rounded w-full" />
                      {errors.lastname && <p className="text-red-500 text-xs">{errors.lastname}</p>}
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
                      <input type="tel" key="mobile" placeholder="Enter Mobile Number . . ." onChange={(e) => setMobilenumber(e.target.value)} maxLength={10} className="border border-gray-300 p-3 rounded w-full" />
                      {errors.mobilenumber && <p className="text-red-500 text-xs">{errors.mobilenumber}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" key="email" placeholder="Enter Email ID . . ." onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 p-3 rounded w-1/2" />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                  </div>
                  <button type="button" onClick={handleNext} className="bg-indigo-800 text-white font-semibold py-3 px-6 rounded">Next</button>
                </div>
              ) : (
                <div className="space-y-6 p-4 bg-gray-50 rounded-lg mt-2">
                  <div className="font-semibold text-gray-800">Shipping Address</div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-1">Address 1 <span className="text-red-500">*</span></label>
                      <input type="t    Q`ext" key="address1" placeholder="Enter Address 1 . . ." onChange={(e) => setAddress1(e.target.value)} className="border border-gray-300 p-3 rounded w-full" />
                      {errors.address1 && <p className="text-red-500 text-xs">{errors.address1}</p>}
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Address 2</label>
                      <input type="text" key="address2" placeholder="Enter Address 2 . . ." onChange={(e) => setAddress2(e.target.value)} className="border border-gray-300 p-3 rounded w-full" />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Landmark</label>
                      <input type="text"  key="landmark" placeholder="Enter Landmark . . ." onChange={(e) => setLandmark(e.target.value)} className="border border-gray-300 p-3 rounded w-full" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
                      <select value={selectedCountry} onChange={handleCountryChange} className="border border-gray-300 p-3 rounded w-full">
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country.name} value={country.name}>{country.name}</option>
                        ))}
                      </select>
                      {errors.country && <p className="text-red-500 text-xs">{errors.country}</p>}
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">State <span className="text-red-500">*</span></label>
                      <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)} className="border border-gray-300 p-3 rounded w-full">
                        <option value="">Select State</option>
                        {selectedCountry && countries.find(c => c.name === selectedCountry)?.states.map((state) => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                      {errors.state && <p className="text-red-500 text-xs">{errors.state}</p>}
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">City <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Enter City . . ." onChange={(e) => setCity(e.target.value)} className="border border-gray-300 p-3 rounded w-full" />
                      {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Pincode <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="Enter Pincode . . ." onChange={(e) => setPin(e.target.value)} className="border border-gray-300 p-3 rounded w-1/2" required />
                    {errors.pin && <p className="text-red-500 text-xs">{errors.pin}</p>}
                  </div>

                  <div className="flex items-center mt-4">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-gray-700">Billing address is same as shipping address</label>
                  </div>
                  <button type="button" onClick={handlePrev} className="bg-indigo-800 text-white font-semibold py-3 px-6 rounded">Prev</button>
                </div>
              )}

              <div className="flex justify-end mt-6">
                <button type="submit" className="bg-indigo-800 text-white font-semibold py-3 px-6 rounded">Continue</button>
              </div>
            </div>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Consignee;

