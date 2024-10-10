/* eslint-disable react/prop-types */

export const Card = ({ active, text, description }) => {
    const images = [
      './img/img4.jpg',
      './img/img5.jpg',
      './img/img6.jpg',
      './img/img7.jpg',
      './img/img8.jpg',
      './img/img9.jpg',
    ];
  
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 transition-transform transform hover:scale-105">
        <img 
          src={images[active]} 
          alt={`Card ${active}`} 
          className="w-full h-48 object-cover" 
        />
        <div className="p-4">
            <p className="text-slate-500 mb-2 text-2xl">{text}</p>
            <p className="text-gray-700 mb-2">{description}</p>
            <button className="border rounded-3xl border-slate-500 text-slate-500 bg-white py-2 px-4 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-slate-500">
              More
            </button>
        </div>
      </div>
    );
};
