import React from 'react';
import { Heart } from 'lucide-react';

const PositiveImpact: React.FC = () => {
  return (
    <div className="mt-8 p-4 bg-green-50 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Heart className="mr-2 text-red-500" />
        Positive Impact
      </h2>
      <p className="text-gray-700">
        By using VALID AI, you're contributing to a safer digital world. Our deepfake detection helps:
      </p>
      <ul className="list-disc pl-5 mt-2 space-y-2">
        <li>Protect individuals from identity theft and misinformation</li>
        <li>Preserve trust in digital media and online content</li>
        <li>Support ethical use of AI technology</li>
        <li>Educate others about the importance of digital literacy</li>
      </ul>
    </div>
  );
};

export default PositiveImpact;