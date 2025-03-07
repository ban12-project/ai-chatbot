export const DEFAULT_CHAT_MODEL: string = 'gemini-2.0-flash';

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'gemini-2.0-pro-exp-02-05',
    name: 'Gemini 2.0 Pro Exp 02-05',
    description: 'Improved quality, especially for world knowledge, code, and long context',
  },
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
