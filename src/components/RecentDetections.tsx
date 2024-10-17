import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';

interface Detection {
  id: number;
  name: string;
  isDeepfake: boolean;
}

interface RecentDetectionsProps {
  detections: Detection[];
}

const RecentDetections: React.FC<RecentDetectionsProps> = ({ detections }) => {
  if (detections.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Recent Detections</h2>
      <ul className="space-y-2">
        {detections.map((detection) => (
          <li key={detection.id} className="flex items-center space-x-2 p-2 bg-gray-100 rounded">
            {detection.isDeepfake ? (
              <AlertTriangle className="text-red-500" size={20} />
            ) : (
              <CheckCircle className="text-green-500" size={20} />
            )}
            <span className="truncate">{detection.name}</span>
            <span className="text-sm text-gray-500">
              {detection.isDeepfake ? 'Deepfake' : 'Authentic'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentDetections;