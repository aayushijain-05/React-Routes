import { useState } from 'react';
// import { Label } from './Label';

export const TextArea = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="flex flex-col mb-4">
      
      <textarea
        value={text}
        onChange={handleChange}
        className="border rounded p-2 h-32 resize-none"
        placeholder="Type your address here..."
      />
    </div>
  );
};
