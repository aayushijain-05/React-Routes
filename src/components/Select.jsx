import { useState } from 'react';
import { Label } from './Label';
import { Input } from './Input';

export const Select = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 text-gray-700">Select Your Country:</label>
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        className="border rounded p-2 mb-4  text-gray-700"
      >
        <option value="" disabled>Select a country</option>
        <option value="+1">United States (+1)</option>
        <option value="+1">Canada (+1)</option>
        <option value="+44">United Kingdom (+44)</option>
        <option value="+61">Australia (+61)</option>
        <option value="+91">India (+91)</option>
        <option value="+49">Germany (+49)</option>
        <option value="+33">France (+33)</option>
        
      </select>
      <div className="mb-4">
        <Label type={"Phone Number"} />
        <Input 
          type={"tel"} 
          placeholder={"Enter your Phone Number"} 
          className="border rounded w-full py-2 px-3" 
          value={phoneNumber}
          onChange={handlePhoneChange}
        />
      </div>
    </div>
  );
};
