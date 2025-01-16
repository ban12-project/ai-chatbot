import { openai } from '@ai-sdk/openai';
import { xai } from '@ai-sdk/xai';
import { google } from '@ai-sdk/google';
import { deepseek } from '@ai-sdk/deepseek';
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
          ? deepseek(apiIdentifier)
          : null;

  if (!model) throw new Error(`Unknown model: ${apiIdentifier}`);

  return wrapLanguageModel({
    model,
    middleware: customMiddleware,
  });
};

export const imageGenerationModel = openai.image('dall-e-3');
