import React from 'react';
import { Lightbulb } from 'lucide-react';

const tips = [
  "Look for unnatural eye movements or blinking patterns.",
  "Check for inconsistencies in facial features or hair.",
  "Pay attention to lighting and shadows on the face.",
  "Be cautious of videos with poor audio quality or lip-sync issues.",
  "Verify the source and context of the video before sharing."
];

const EducationalTips: React.FC = () => {
  return (
    <div className="mt-8 p-4 bg-blue-50 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <Lightbulb className="mr-2 text-yellow-500" />
        Educational Tips
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="text-gray-700">{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationalTips;