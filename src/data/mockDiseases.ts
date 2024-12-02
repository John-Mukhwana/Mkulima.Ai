import { Disease } from '../types';

export const mockDiseases: Disease[] = [
  {
    id: '1',
    type: 'disease',
    pathogenType: 'fungal',
    name: 'Late Blight',
    description: 'A serious disease affecting potato and tomato plants, caused by the oomycete pathogen Phytophthora infestans.',
    symptoms: [
      'Dark brown spots on leaves',
      'White fuzzy growth on leaf undersides',
      'Rapid wilting and death of foliage',
      'Dark lesions on stems and fruits'
    ],
    treatments: [
      {
        name: 'Copper Fungicide',
        type: 'chemical',
        description: 'Broad-spectrum fungicide that prevents spore germination',
        dosage: '2-4 tablespoons per gallon of water',
        applicationMethod: 'Spray on foliage every 7-10 days during wet weather'
      },
      {
        name: 'Organic Alternative',
        type: 'organic',
        description: 'Mixture of baking soda and organic liquid soap',
        dosage: '1 tablespoon baking soda + 1 teaspoon soap per gallon of water',
        applicationMethod: 'Apply as preventive spray every 10-14 days'
      }
    ],
    preventiveMeasures: [
      'Plant resistant varieties',
      'Improve air circulation between plants',
      'Water at the base of plants',
      'Remove infected plant debris',
      'Rotate crops annually'
    ],
    affectedSpecies: ['Potato', 'Tomato']
  },
  {
    id: '2',
    type: 'disease',
    pathogenType: 'fungal',
    name: 'Powdery Mildew',
    description: 'A fungal disease that affects a wide range of plants, causing a distinctive white powdery coating on leaves and stems.',
    symptoms: [
      'White powdery spots on leaves and stems',
      'Yellowing and distortion of leaves',
      'Stunted growth',
      'Premature leaf drop'
    ],
    treatments: [
      {
        name: 'Sulfur-based Fungicide',
        type: 'chemical',
        description: 'Effective contact fungicide that prevents spore germination',
        dosage: '2 tablespoons per gallon of water',
        applicationMethod: 'Apply every 7-14 days, avoid application in hot weather'
      },
      {
        name: 'Milk Spray',
        type: 'organic',
        description: 'Natural fungicide using milk proteins',
        dosage: '1 part milk to 9 parts water',
        applicationMethod: 'Spray on affected areas weekly during morning hours'
      }
    ],
    preventiveMeasures: [
      'Space plants properly for good air circulation',
      'Avoid overhead watering',
      'Remove affected leaves promptly',
      'Use resistant varieties when available'
    ],
    affectedSpecies: ['Cucumber', 'Squash', 'Pumpkin', 'Grape']
  }
];