import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoUploader from './components/VideoUploader';
import ResultDisplay from './components/ResultDisplay';
import BackgroundAnimation from './components/BackgroundAnimation';
import LinkInput from './components/LinkInput';
import RecentDetections from './components/RecentDetections';
import EducationalTips from './components/EducationalTips';
import PositiveImpact from './components/PositiveImpact';
import AIExplainer from './components/AIExplainer';

function App() {
  const [result, setResult] = useState<null | { isDeepfake: boolean; confidence: number }>(null);
  const [recentDetections, setRecentDetections] = useState<Array<{ id: number; name: string; isDeepfake: boolean }>>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleMediaSubmit = async (mediaSource: File | string) => {
    setIsProcessing(true);
    console.log('Processing media:', typeof mediaSource === 'string' ? mediaSource : mediaSource.name);
    
    // Simulate API call
    setTimeout(() => {
      const mockResult = {
        isDeepfake: Math.random() > 0.5,
        confidence: Math.random() * 100
      };
      setResult(mockResult);
      
      setRecentDetections(prev => [
        { id: Date.now(), name: typeof mediaSource === 'string' ? mediaSource : mediaSource.name, isDeepfake: mockResult.isDeepfake },
        ...prev.slice(0, 4)
      ]);
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      <BackgroundAnimation />
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-6xl font-bold text-center mb-8 text-white shadow-text animate-pulse">VALID AI Deepfake Detection</h1>
        <div className="bg-white shadow-2xl rounded-lg p-8 max-w-4xl mx-auto backdrop-filter backdrop-blur-lg bg-opacity-90">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Upload Media</h2>
              <VideoUploader onUpload={handleMediaSubmit} isProcessing={isProcessing} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Paste Link</h2>
              <LinkInput onSubmit={handleMediaSubmit} isProcessing={isProcessing} />
            </div>
          </div>
          {isProcessing && (
            <div className="mt-6 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              <p className="mt-2 text-blue-600">Analyzing media...</p>
            </div>
          )}
          {result && <ResultDisplay result={result} />}
          <RecentDetections detections={recentDetections} />
          <AIExplainer />
          <EducationalTips />
          <PositiveImpact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;