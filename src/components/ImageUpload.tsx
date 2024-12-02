import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Camera, Image } from 'lucide-react';
import { IssueType } from '../types';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  issueType: IssueType;
}

export function ImageUpload({ onImageUpload, issueType }: ImageUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onImageUpload(acceptedFiles[0]);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1
  });

  const getUploadMessage = () => {
    if (issueType === 'disease') {
      return {
        active: 'Drop the image of your diseased plant',
        inactive: 'Upload an image of the diseased plant',
        description: 'Take a clear photo of the affected plant parts showing disease symptoms'
      };
    }
    return {
      active: 'Drop the image of the pest or damage',
      inactive: 'Upload an image of the pest or pest damage',
      description: 'Take a clear photo of the pest or the damage caused by it'
    };
  };

  const messages = getUploadMessage();
  const accentColor = issueType === 'disease' ? 'red' : 'orange';

  return (
    <div
      {...getRootProps()}
      className={`w-full p-8 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-200
        ${isDragActive 
          ? `border-${accentColor}-500 bg-${accentColor}-50 scale-102`
          : 'border-gray-300 hover:border-green-400 hover:bg-green-50'}`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center text-gray-600">
        <div className="flex gap-4 mb-4">
          <Camera className={`w-8 h-8 text-${accentColor}-500`} />
          <Image className={`w-8 h-8 text-${accentColor}-500`} />
        </div>
        <p className="text-xl font-medium mb-2">
          {isDragActive ? messages.active : messages.inactive}
        </p>
        <p className="text-sm text-gray-500">Drag & drop or click to select</p>
        <p className="text-sm text-gray-500 mt-4">{messages.description}</p>
        <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
          <Upload className="w-4 h-4" />
          <span>Supported formats: JPEG, PNG</span>
        </div>
      </div>
    </div>
  );
}