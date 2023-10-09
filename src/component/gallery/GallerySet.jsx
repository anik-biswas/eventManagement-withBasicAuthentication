import React from 'react';

const GallerySet = (event) => {
    const {images,title} = event.event;
    console.log(title)
    return (
        <div>
            <h2 className='text-2xl font-semibold text-center md:text-left text-red-800 my-5'>{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
            {images.map((imgs, index) => (
                <li key={index} className="list-none">
                  <img src={imgs} alt={`Image ${index + 1}`} className="h-60 w-60" />
                </li>
              ))}
              </div>
        </div>
    );
};

export default GallerySet;