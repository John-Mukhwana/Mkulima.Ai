
import Sprout from './Sprout'; // Adjust the path as necessary

export function LoadingSpinner() {
  return (
    <div className="text-center py-12">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-500 border-t-transparent mx-auto mb-4"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Sprout className="w-6 h-6 text-green-500" />
        </div>
      </div>
      <p className="text-lg font-medium text-gray-700">Analyzing your image...</p>
      <p className="text-sm text-gray-500 mt-2">Using AI to identify issues in your crop</p>
    </div>
  );
}