import React, { useRef, useEffect } from 'react';

const RealDOMExample = () => {
   const realDOMRef = useRef(null);

   useEffect(() => {
      const realDOMElement = realDOMRef.current;
      if (realDOMElement) {
         realDOMElement.textContent = 'This content is updated using the real DOM!';
         realDOMElement.style.color = 'blue';
      }
   }, []);

   return (
      <div>
         <p ref={realDOMRef}>Initial content</p>
      </div>
   );
};

export default RealDOMExample;
