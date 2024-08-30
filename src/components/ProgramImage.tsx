import React from 'react';

interface ProgramImageProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ProgramImage: React.FC<ProgramImageProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="relative w-[647px] h-[400px] rounded-[50px] overflow-hidden shadow-[#5b5959] shadow-xl">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute bottom-0 left-0 text-white p-6">
        <div className="text-4xl mb-2 font-bold title-font">
          {title}
        </div>
        <div className="text-md">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProgramImage;