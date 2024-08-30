import React from 'react';

interface BoxProps {
  number: number;
  text: string;
}

const Box: React.FC<BoxProps> = ({ number, text }) => {
  return (
    <div
      className="box bg-white bg-opacity-40 text-white w-[300px] h-[300px] flex flex-col items-center justify-center rounded-lg shadow-lg"
    >
      <p className="text-[96px] font-medium mb-4">{number}</p>
      <p className="text-[36px]">{text}</p>
    </div>
  );
};

export default Box;