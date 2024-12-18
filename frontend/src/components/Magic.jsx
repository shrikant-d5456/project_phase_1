import React, { useState } from 'react';

const Magic = () => {
  const [animate, setAnimate] = useState(false);



  return (
    <div 
      className={`magic absolute bottom-1 bg-white w-full h-full vanish`} 
    >
    </div>
  );
};

export default Magic;
