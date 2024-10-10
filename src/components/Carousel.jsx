import { useState, useEffect } from "react";

export const Carousel = () => {
  const images = ['/img/img1.jpg', '/img/img2.jpg', '/img/img3.jpg'];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  },);

 
  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[420px] mb-8 overflow-hidden  shadow-lg">

      <img 
        src={images[activeIndex]} 
        alt={`Slide ${activeIndex}`} 
        className="object-cover w-full h-full transition-opacity duration-700 ease-in-out" 
      />
      <button 
        onClick={prevImage} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70">
        <i className="fa-solid fa-chevron-left" />
      </button>
      <button 
        onClick={nextImage} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70">
        <i className="fa-solid fa-chevron-right" />
      </button>
    </div>
  );
};
