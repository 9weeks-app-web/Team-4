import React, { useState } from 'react';
import Image from 'next/image';

interface EyeButtonProps {
  hits: number;
}

const EyeButton: React.FC<EyeButtonProps> = ({ hits }) => {
  const [eyeHovered, setEyeHovered] = useState(false);

  return (
    <div
      className="flex items-center cursor-pointer px-[77px] py-[11px] rounded-lg hover:bg-background-purple"
      onMouseEnter={() => setEyeHovered(true)}
      onMouseLeave={() => setEyeHovered(false)}
    >
      <Image
        src={
          eyeHovered
            ? '/images/community/eye_hover.png'
            : '/images/community/eye.png'
        }
        alt="Eye Image"
        width={24}
        height={24}
        className="mr-[6px]"
      />
      <div
        className={` ${
          eyeHovered ? ' text-hover-purple' : ''
        } text-sm font-medium`}
      >
        {hits}
      </div>
    </div>
  );
};

export default EyeButton;
