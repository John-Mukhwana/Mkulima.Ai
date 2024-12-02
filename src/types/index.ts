export type IssueType = 'disease' | 'pest';

export interface BaseIssue {
  id: string;
  type: IssueType;
  name: string;
  description: string;
  symptoms: string[];
  treatments: Treatment[];
  preventiveMeasures: string[];
  affectedSpecies: string[];
}

export interface Disease extends BaseIssue {
  type: 'disease';
  pathogenType: 'fungal' | 'bacterial' | 'viral';
}

export interface Pest extends BaseIssue {
  type: 'pest';
  pestCategory: 'insect' | 'mite' | 'nematode' | 'rodent';
  lifecycle: string;
}

export type CropIssue = Disease | Pest;

export interface Treatment {
  name: string;
  type: 'chemical' | 'organic' | 'biological';
  description: string;
  dosage?: string;
  applicationMethod: string;
}

export interface UploadedImage {
  id: string;
  url: string;
  timestamp: Date;
  diagnosis?: CropIssue;
}