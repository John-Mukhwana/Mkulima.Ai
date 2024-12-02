import React from 'react';
import { Bug, AlertCircle } from 'lucide-react';
import { IssueType } from '../types';

interface IssueTypeSelectorProps {
  onSelect: (type: IssueType) => void;
}

export function IssueTypeSelector({ onSelect }: IssueTypeSelectorProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
      <button
        onClick={() => onSelect('disease')}
        className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-transparent hover:border-red-500"
      >
        <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Plant Disease</h3>
        <p className="text-gray-600 text-center">
          Identify and treat diseases affecting your crops
        </p>
      </button>

      <button
        onClick={() => onSelect('pest')}
        className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-transparent hover:border-orange-500"
      >
        <Bug className="w-16 h-16 text-orange-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Pest Problem</h3>
        <p className="text-gray-600 text-center">
          Identify and control pests damaging your plants
        </p>
      </button>
    </div>
  );
}