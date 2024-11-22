// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  /* {
    id: 'gpt-4o-mini',
    label: 'GPT 4o mini',
    apiIdentifier: 'gpt-4o-mini',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'gpt-4o',
    label: 'GPT 4o',
    apiIdentifier: 'gpt-4o',
    description: 'For complex, multi-step tasks',
  }, */
  {
    id: 'grok-beta',
    label: 'Grok beta',
    apiIdentifier: 'grok-beta',
    description: 'Comparable performance to Grok 2 but with improved efficiency, speed and capabilities.',
  },
  {
    id: 'grok-vision-beta',
    label: 'Grok Vision beta',
    apiIdentifier: 'grok-vision-beta',
    description: 'Our latest image understanding model that can process a wide variety of visual information, including documents, diagrams, charts, screenshots, and photographs.',
  },
  {
    id: 'gemini-1.5-pro-latest',
    label: 'Gemini 1.5 Pro latest',
    apiIdentifier: 'gemini-1.5-pro-latest',
    description: 'Complex reasoning tasks requiring more intelligence',
  },
  {
    id: 'gemini-1.5-pro',
    label: 'Gemini 1.5 Pro',
    apiIdentifier: 'gemini-1.5-pro',
    description: 'Complex reasoning tasks requiring more intelligence',
  },
  {
    id: 'gemini-1.5-flash-latest',
    label: 'Gemini 1.5 Flash latest',
    apiIdentifier: 'gemini-1.5-flash-latest',
    description: 'Fast and versatile performance across a diverse variety of tasks',
  },
  {
    id: 'gemini-1.5-flash',
    label: 'Gemini 1.5 Flash',
    apiIdentifier: 'gemini-1.5-flash',
    description: 'Fast and versatile performance across a diverse variety of tasks',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'grok-beta';
