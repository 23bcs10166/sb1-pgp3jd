import React, { useRef, useState } from 'react';
import { Upload, Film, Image } from 'lucide-react';

interface VideoUploaderProps {
  onUpload: (file: File) => void;
  isProcessing: boolean;
}

const VideoUploader: React.FC<VideoUploaderProps> = ({ onUpload, isProcessing }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    if (file && (file.type.startsWith('video/') || file.type.startsWith('image/'))) {
      setPreviewUrl(URL.createObjectURL(file));
      onUpload(file);
    }
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all duration-300 ${
        isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50'
      } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => !isProcessing && fileInputRef.current?.click()}
    >
      {previewUrl ? (
        <div className="relative w-full h-48">
          {previewUrl.startsWith('data:video') ? (
            <video src={previewUrl} className="w-full h-full object-cover rounded" />
          ) : (
            <img src={previewUrl} alt="Preview" className="w-full h-full object-cover rounded" />
          )}
        </div>
      ) : (
        <>
          <Upload className="mx-auto mb-2" size={32} />
          <p className="text-sm mb-1">Drag and drop your video or image here</p>
          <p className="text-xs text-gray-500">or click to select a file</p>
          <div className="flex justify-center mt-2 space-x-2">
            <Film size={20} />
            <Image size={20} />
          </div>
        </>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInput}
        accept="video/*,image/*"
        className="hidden"
        disabled={isProcessing}
      />
    </div>
  );
};

export default VideoUploader;