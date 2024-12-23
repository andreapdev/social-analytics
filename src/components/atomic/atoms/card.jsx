import React from 'react';

const Card = ({ children, extraClass, dataAnimation }) => {
  return (
    <div className={`bg-secondary/80 rounded-md ${extraClass}`} data-animation={dataAnimation}
    >
      {children}
    </div>
  );
};

export default Card;