import React from 'react';
import { AlertTriangle, CheckCircle, Info, BarChart2 } from 'lucide-react';

interface ResultDisplayProps {
  result: {
    isDeepfake: boolean;
    confidence: number;
  };
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  const { isDeepfake, confidence } = result;

  return (
    <div className="mt-6 p-6 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 shadow-md">
      <div className="flex items-center justify-center mb-4">
        {isDeepfake ? (
          <AlertTriangle className="text-red-500 mr-2 animate-pulse" size={32} />
        ) : (
          <CheckCircle className="text-green-500 mr-2 animate-pulse" size={32} />
        )}
        <h2 className="text-2xl font-bold">
          {isDeepfake ? 'Deepfake Detected' : 'Authentic Media'}
        </h2>
      </div>
      <div className="flex items-center justify-center mb-4">
        <BarChart2 className="text-blue-500 mr-2" size={24} />
        <div className="w-64 h-4 bg-gray-300 rounded-full overflow-hidden">
          <div 
            className={`h-full ${isDeepfake ? 'bg-red-500' : 'bg-green-500'} transition-all duration-1000 ease-out`}
            style={{ width: `${confidence}%` }}
          ></div>
        </div>
        <span className="ml-2 font-semibold">{confidence.toFixed(2)}%</span>
      </div>
      <p className="text-center text-lg font-medium mb-4">
        {isDeepfake
          ? 'This media appears to contain manipulated content.'
          : 'This media appears to be authentic.'}
      </p>
      <div className="p-4 bg-blue-100 rounded-lg flex items-start">
        <Info className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={24} />
        <p className="text-sm text-blue-800">
          {isDeepfake
            ? "Remember, deepfakes can be created for various purposes, including entertainment. Always verify the source and context before drawing conclusions."
            : "While this media appears authentic, always stay vigilant. Digital manipulation techniques are constantly evolving."}
        </p>
      </div>
    </div>
  );
};

export default ResultDisplay;