import React, { useState } from 'react';
import { ImageUpload } from './components/ImageUpload';
import { ImagePreview } from './components/ImagePreview';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Header } from './components/Header';
import { IssueTypeSelector } from './components/IssueTypeSelector';
import { mockDiseases } from './data/mockDiseases';
import { mockPests } from './data/mockPests';
import type { CropIssue, IssueType } from './types';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [diagnosis, setDiagnosis] = useState<CropIssue | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedIssueType, setSelectedIssueType] = useState<IssueType | null>(null);

  const handleImageUpload = async (file: File) => {
    setSelectedImage(file);
    setIsAnalyzing(true);
    
    // Simulate API call delay and random issue selection based on type
    setTimeout(() => {
      const issues = selectedIssueType === 'disease' ? mockDiseases : mockPests;
      const randomIssue = issues[Math.floor(Math.random() * issues.length)];
      setDiagnosis(randomIssue);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleReset = () => {
    setSelectedImage(null);
    setDiagnosis(null);
    setSelectedIssueType(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onReset={handleReset} />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {!selectedIssueType ? (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                What would you like to identify?
              </h2>
              <IssueTypeSelector onSelect={setSelectedIssueType} />
            </section>
          ) : (
            <>
              {!selectedImage && (
                <section className="mb-8">
                  <ImageUpload 
                    onImageUpload={handleImageUpload}
                    issueType={selectedIssueType}
                  />
                </section>
              )}

              {isAnalyzing && <LoadingSpinner />}

              {selectedImage && diagnosis && !isAnalyzing && (
                <ImagePreview image={selectedImage} diagnosis={diagnosis} />
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}