import  { useState } from 'react';

 export const DatePicker = () => {
  const [date, setDate] = useState('');

  return (
    <div>
    
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="border rounded-md p-2"
    />
    <br></br>
    <br></br>
    </div>
  );
};


