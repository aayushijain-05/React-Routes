

import  { useState } from 'react';

export const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="mr-2"
      />
      <label className="text-gray-700">I agree to the terms and conditions</label>
    </div>
  );
};
