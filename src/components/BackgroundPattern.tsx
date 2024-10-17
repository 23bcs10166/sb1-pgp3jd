import React from 'react';

const BackgroundPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="text-white"
      >
        <defs>
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="currentColor"></circle>
          </pattern>
        </defs>

        <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
      </svg>
    </div>
  );
};

export default BackgroundPattern;