import React from 'react';
import { CropIssue, Disease, Pest } from '../types';
import { AlertCircle, Leaf, Pill, Bug, Info } from 'lucide-react';

interface DiagnosisResultProps {
  issue: CropIssue;
}

export function DiagnosisResult({ issue }: DiagnosisResultProps) {
  const isPest = (issue: CropIssue): issue is Pest => issue.type === 'pest';
  const isDisease = (issue: CropIssue): issue is Disease => issue.type === 'disease';

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        {isPest(issue) ? (
          <Bug className="w-6 h-6 text-orange-500" />
        ) : (
          <AlertCircle className="w-6 h-6 text-red-500" />
        )}
        <h2 className="text-2xl font-bold text-gray-800">{issue.name}</h2>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-600">{issue.description}</p>
        {isPest(issue) && (
          <div className="mt-4 bg-orange-50 p-4 rounded-lg">
            <h4 className="font-medium text-orange-800 mb-2">Lifecycle</h4>
            <p className="text-orange-700">{issue.lifecycle}</p>
          </div>
        )}
        {isDisease(issue) && (
          <div className="mt-4 bg-red-50 p-4 rounded-lg">
            <h4 className="font-medium text-red-800 mb-2">Pathogen Type</h4>
            <p className="text-red-700 capitalize">{issue.pathogenType}</p>
          </div>
        )}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
          <Info className="w-5 h-5 text-blue-500" />
          Symptoms
        </h3>
        <ul className="list-disc list-inside space-y-2">
          {issue.symptoms.map((symptom, index) => (
            <li key={index} className="text-gray-600">{symptom}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
          <Pill className="w-5 h-5 text-blue-500" />
          Treatments
        </h3>
        {issue.treatments.map((treatment, index) => (
          <div key={index} className="mb-4 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800">{treatment.name}</h4>
            <p className="text-sm text-gray-600 mt-1">{treatment.description}</p>
            {treatment.dosage && (
              <p className="text-sm text-gray-600 mt-2">
                <strong>Dosage:</strong> {treatment.dosage}
              </p>
            )}
            <p className="text-sm text-gray-600 mt-1">
              <strong>Application:</strong> {treatment.applicationMethod}
            </p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
          <Leaf className="w-5 h-5 text-green-500" />
          Preventive Measures
        </h3>
        <ul className="list-disc list-inside space-y-2">
          {issue.preventiveMeasures.map((measure, index) => (
            <li key={index} className="text-gray-600">{measure}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}