import { xai } from '@ai-sdk/xai';
import { google } from '@ai-sdk/google';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

export const customModel = (apiIdentifier: string) => {
  const model = apiIdentifier.startsWith('grok')
    ? xai(apiIdentifier)
    : apiIdentifier.startsWith('gemini')
    ? google(apiIdentifier)
    : null;

  if (!model) throw new Error(`Unknown model: ${apiIdentifier}`);
  
  return wrapLanguageModel({
    model,
    middleware: customMiddleware,
  });
};
