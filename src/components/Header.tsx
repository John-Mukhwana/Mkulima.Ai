import React from 'react';
import { Sprout, RotateCcw } from 'lucide-react';

interface HeaderProps {
  onReset: () => void;
}

export function Header({ onReset }: HeaderProps) {
  return (
    <header className="bg-green-600 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sprout className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Mkulima.Ai</h1>
              <p className="text-sm text-green-100">Powered by AI Crop Analysis</p>
            </div>
          </div>
          <button
            onClick={onReset}
            className="flex items-center gap-2 bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Start Over
          </button>
        </div>
        <p className="mt-2 text-green-100">
          Instant disease and pest detection for smarter farming
        </p>
      </div>
    </header>
  );
}