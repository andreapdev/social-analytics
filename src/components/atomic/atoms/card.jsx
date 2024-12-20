import React from 'react';

const Card = ({ children, extraClass, dataAnimation }) => {
  return (
    <div className={`bg-secondary/40 p-5 ${extraClass}`} data-animation={dataAnimation}
    >
      {children}
    </div>
  );
};

export default Card;