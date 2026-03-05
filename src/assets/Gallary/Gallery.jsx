import React from 'react';
import event1 from "./katt-yukawa-K0E6E0a0R3A-unsplash.jpg";
import event2 from "./noah-buscher-x8ZStukS2PM-unsplash.jpg";
import event3 from "./pille-r-priske-Y1JjwhHaPRM-unsplash.jpg";
import event4 from "./sandie-clarke-q13Zq1Jufks-unsplash.jpg";


const Gallery = () => {
    const images = [event1, event2, event3, event4];
    return (
        <div className="py-12 bg-gray-100">
      <h2 className="text-green-800 text-4xl mb-5 font-bold text-center drop-shadow-lg">Event Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={img}
              alt={`Event ${index + 1}`}
              className="w-full h-60 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
    );
};

export default Gallery;