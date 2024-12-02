import { Pest } from '../types';

export const mockPests: Pest[] = [
  {
    id: 'p1',
    type: 'pest',
    pestCategory: 'insect',
    name: 'Aphids',
    description: 'Small sap-sucking insects that cluster on new growth and the undersides of leaves, causing damage to crops.',
    lifecycle: 'Females give birth to live young without mating. Nymphs mature in 7-10 days. Multiple generations per season.',
    symptoms: [
      'Curled or distorted leaves',
      'Sticky honeydew on leaves',
      'Yellowing of leaves',
      'Stunted plant growth',
      'Black sooty mold growth on honeydew'
    ],
    treatments: [
      {
        name: 'Insecticidal Soap',
        type: 'organic',
        description: 'Natural contact insecticide that disrupts cell membranes',
        dosage: '2.5 tablespoons per gallon of water',
        applicationMethod: 'Spray directly on aphids, ensuring complete coverage of affected areas'
      },
      {
        name: 'Neem Oil',
        type: 'organic',
        description: 'Natural insecticide that also prevents feeding',
        dosage: '2 tablespoons per gallon of water',
        applicationMethod: 'Apply every 7 days until infestation clears'
      }
    ],
    preventiveMeasures: [
      'Encourage beneficial insects like ladybugs',
      'Use companion planting with herbs',
      'Monitor plants regularly',
      'Remove heavily infested plant parts',
      'Maintain healthy soil conditions'
    ],
    affectedSpecies: ['Tomato', 'Pepper', 'Cabbage', 'Rose', 'Citrus']
  },
  {
    id: 'p2',
    type: 'pest',
    pestCategory: 'insect',
    name: 'Tomato Hornworm',
    description: 'Large green caterpillars that can quickly defoliate tomato plants and their relatives.',
    lifecycle: 'Adults lay eggs on leaves, caterpillars feed for 4-6 weeks before pupating in soil.',
    symptoms: [
      'Extensive defoliation of plants',
      'Large holes in leaves',
      'Missing fruit',
      'Black droppings on leaves',
      'Bare stems where leaves were eaten'
    ],
    treatments: [
      {
        name: 'Bacillus thuringiensis (Bt)',
        type: 'biological',
        description: 'Natural bacteria that specifically targets caterpillars',
        dosage: '1-2 teaspoons per gallon of water',
        applicationMethod: 'Spray on all plant surfaces every 7-10 days'
      },
      {
        name: 'Hand Picking',
        type: 'organic',
        description: 'Manual removal of caterpillars',
        applicationMethod: 'Inspect plants daily and remove hornworms by hand'
      }
    ],
    preventiveMeasures: [
      'Till soil in spring to destroy pupae',
      'Plant dill and marigolds as companion plants',
      'Monitor plants regularly',
      'Encourage natural predators like parasitic wasps',
      'Clean up garden debris in fall'
    ],
    affectedSpecies: ['Tomato', 'Pepper', 'Eggplant', 'Potato']
  }
];