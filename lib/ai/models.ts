import { openai } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';
import { fireworks } from '@ai-sdk/fireworks';
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';

export const DEFAULT_CHAT_MODEL: string = 'gemini-2.0-flash';

export const myProvider = customProvider({
  languageModels: {
    'gemini-2.0-flash-thinking-exp': google('gemini-2.0-flash-thinking-exp'),
    'gemini-2.0-flash': google('gemini-2.0-flash'),
    'gemini-exp-1206': google('gemini-exp-1206'),
    'gemini-1.5-flash': google('gemini-1.5-flash'),
    'gemini-1.5-pro': google('gemini-1.5-pro'),
    'deepseek-chat': fireworks('accounts/fireworks/models/deepseek-v3'),
    'chat-model-reasoning': wrapLanguageModel({
      model: fireworks('accounts/fireworks/models/deepseek-r1'),
      middleware: extractReasoningMiddleware({ tagName: 'think' }),
    }),
    'title-model': google('gemini-2.0-flash'),
    'artifact-model': google('gemini-2.0-flash'),
  },
  imageModels: {
    'small-model': fireworks.image('accounts/fireworks/models/stable-diffusion-3p5-medium'),
    'large-model': fireworks.image('accounts/fireworks/models/stable-diffusion-3p5-large-turbo'),
  },
});

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'gemini-2.0-flash-thinking-exp',
    name: 'Gemini 2.0 Flash Thinking Exp',
    description: 'Reasoning for complex problems, features a new Thinking mode',
  },
  {
    id: 'gemini-2.0-flash',
    name: 'Gemini 2.0 Flash',
    description:
      'Next generation features, speed, and multimodal generation for a diverse variety of tasks',
  },
  {
    id: 'gemini-exp-1206',
    name: 'Gemini Exp 1206',
    description: 'Quality improvements, celebrate 1 year of Gemini'
  },
  {
    id: 'gemini-1.5-flash',
    name: 'Gemini 1.5 Flash',
    description:
      'Fast and versatile performance across a diverse variety of tasks',
  },
  {
    id: 'gemini-1.5-pro',
    name: 'Gemini 1.5 Pro',
    description: 'Complex reasoning tasks requiring more intelligence',
  },
  {
    id: 'deepseek-chat',
    name: 'DeepSeek Chat',
    description: 'DeepSeek-V3',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Reasoning model',
    description: 'Uses advanced reasoning',
  }
];
