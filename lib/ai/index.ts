import { openai, createOpenAI } from '@ai-sdk/openai';
import { xai } from '@ai-sdk/xai';
import { google } from '@ai-sdk/google';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  const model = apiIdentifier.startsWith('gpt')
    ? openai(apiIdentifier)
    : apiIdentifier.startsWith('grok')
    ? xai(apiIdentifier)
    : apiIdentifier.startsWith('gemini')
    ? google(apiIdentifier)
    : apiIdentifier.startsWith('deepseek')
    ? createOpenAI({
        baseURL: 'https://api.deepseek.com/v1',
        apiKey: process.env.DEEP_SEEK_API_KEY
      })(apiIdentifier)
    : null;

  if (!model) throw new Error(`Unknown model: ${apiIdentifier}`);

  return wrapLanguageModel({
    model,
    middleware: customMiddleware,
  });
};
