import  { useState } from 'react';

export const Radio = () => {
  const [gender, setGender] = useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 text-gray-700">Select Gender:</label>
      <div className="flex items-center mb-2">
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={handleChange}
          className="mr-2"
        />
        <label htmlFor="male" className="text-gray-700">Male</label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={handleChange}
          className="mr-2"
        />
        <label htmlFor="female" className="text-gray-700">Female</label>
      </div>
    </div>
  );
};

