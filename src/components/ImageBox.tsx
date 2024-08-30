import React from 'react';

interface ImageBoxProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({ imageUrl, title, description }) => {
  return (
    <div
      className="shadow-[#303030] shadow-xl image-box relative w-[450px] h-[410px] rounded-[50px] flex flex-col justify-end items-start p-4 overflow-hidden"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'bottom' 
      }}
    >
      <h3 className="text-4xl font-bold mb-2 text-left z-10">{title}</h3>
      <p className="text-sm z-10">{description}</p>
    </div>
  );
};

export default ImageBox;