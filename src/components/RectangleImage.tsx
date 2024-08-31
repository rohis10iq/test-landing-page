// RectangleImage.tsx
import React from 'react';

interface RectangleImageProps {
  src: string;
  description: string;
}

const RectangleImage: React.FC<RectangleImageProps> = ({ src, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[410px] h-[410px] relative">
        <img className="w-full h-full" src={src} alt={description} />
      </div>
      <div className="mt-4 w-[410px]">
        <p>{description}</p>
        <a className="text-green-500" href="/read-more">Read More</a>
      </div>
    </div>
  );
};

export default RectangleImage;