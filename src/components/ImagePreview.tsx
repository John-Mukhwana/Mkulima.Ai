import React from 'react';
import { CropIssue } from '../types';
import { DiagnosisResult } from './DiagnosisResult';

interface ImagePreviewProps {
  image: File;
  diagnosis: CropIssue;
}

export function ImagePreview({ image, diagnosis }: ImagePreviewProps) {
  return (
    <section className="space-y-6">
      <div className="aspect-video max-h-[400px] overflow-hidden rounded-lg">
        <img
          src={URL.createObjectURL(image)}
          alt="Uploaded crop"
          className="w-full h-full object-cover"
        />
      </div>
      <DiagnosisResult issue={diagnosis} />
    </section>
  );
}