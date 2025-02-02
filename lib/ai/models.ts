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
  },
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
  }, */
  {
    id: 'gemini-2.0-flash-thinking-exp-1219',
    label: 'Gemini 2.0 Flash Exp 1219',
    apiIdentifier: 'gemini-2.0-flash-thinking-exp-1219',
    description: 'Reasoning for complex problems, features a new Thinking mode',
  },
  {
    id: 'gemini-2.0-flash-exp',
    label: 'Gemini 2.0 Flash Exp',
    apiIdentifier: 'gemini-2.0-flash-exp',
    description:
      'Next generation features, speed, and multimodal generation for a diverse variety of tasks',
  },
  {
    id: 'gemini-exp-1206',
    label: 'Gemini Exp 1206',
    apiIdentifier: 'gemini-exp-1206',
    description: 'Quality improvements, celebrate 1 year of Gemini'
  },
  {
    id: 'gemini-1.5-flash',
    label: 'Gemini 1.5 Flash',
    apiIdentifier: 'gemini-1.5-flash',
    description:
      'Fast and versatile performance across a diverse variety of tasks',
  },
  {
    id: 'gemini-1.5-flash-8b',
    label: 'Gemini 1.5 Flash 8b',
    apiIdentifier: 'gemini-1.5-flash-8b',
    description: 'High volume and lower intelligence tasks'
  },
  {
    id: 'gemini-1.5-pro',
    label: 'Gemini 1.5 Pro',
    apiIdentifier: 'gemini-1.5-pro',
    description: 'Complex reasoning tasks requiring more intelligence',
  },
  {
    id: 'deepseek-chat',
    label: 'DeepSeek Chat',
    apiIdentifier: 'deepseek-chat',
    description: 'DeepSeek-V3',
  },
  {
    id: 'groq-deepseek-r1-distill-llama-70b',
    label: 'DeepSeek Reasoner',
    apiIdentifier: 'groq-deepseek-r1-distill-llama-70b',
    description: 'deepseek-r1'
  }
] as const;

export const DEFAULT_MODEL_NAME: string = 'gemini-1.5-flash';
