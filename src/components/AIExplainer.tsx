import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AIExplainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
      <button
        className="w-full p-4 text-left font-semibold flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>How does VALID AI work?</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white bg-opacity-50">
          <p className="mb-2">VALID AI uses advanced machine learning techniques to analyze videos and images:</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Feature Extraction: We analyze facial features, lighting, and movement patterns.</li>
            <li>Deep Learning: Our neural networks have been trained on thousands of real and deepfake videos.</li>
            <li>Temporal Analysis: For videos, we examine frame-to-frame consistency.</li>
            <li>Anomaly Detection: We look for subtle inconsistencies that are hallmarks of synthetic media.</li>
          </ol>
          <p className="mt-4">While our system is highly accurate, it's important to remember that deepfake technology is constantly evolving. Always use critical thinking and verify sources when consuming media online.</p>
        </div>
      )}
    </div>
  );
};

export default AIExplainer;