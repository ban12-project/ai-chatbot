import { extractReasoningMiddleware } from "ai";
import type { LanguageModelV1Middleware } from "ai";

export const customMiddleware = (
  apiIdentifier: string
): LanguageModelV1Middleware => {
  if (apiIdentifier.includes("deepseek-r1"))
    return extractReasoningMiddleware({ tagName: "think" });

  return {};
};
