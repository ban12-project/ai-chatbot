import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from "ai";
import { google } from "@ai-sdk/google";
import { fireworks } from "@ai-sdk/fireworks";
import { isTestEnvironment } from "../constants";
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from "./models.test";

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        "chat-model": chatModel,
        "chat-model-reasoning": reasoningModel,
        "title-model": titleModel,
        "artifact-model": artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        "gemini-2.5-pro-exp-03-25": google("gemini-2.5-pro-exp-03-25"),
        "gemini-2.0-pro-exp-02-05": google("gemini-2.0-pro-exp-02-05"),
        "gemini-2.0-flash-thinking-exp": google(
          "gemini-2.0-flash-thinking-exp",
        ),
        "gemini-2.0-flash": google("gemini-2.0-flash"),
        "gemini-exp-1206": google("gemini-exp-1206"),
        "deepseek-chat": fireworks("accounts/fireworks/models/deepseek-v3"),
        "chat-model-reasoning": wrapLanguageModel({
          model: fireworks("accounts/fireworks/models/deepseek-r1"),
          middleware: extractReasoningMiddleware({ tagName: "think" }),
        }),
        "title-model": google("gemini-2.0-flash"),
        "artifact-model": google("gemini-2.0-flash"),
      },
      imageModels: {
        "small-model": fireworks.image(
          "accounts/fireworks/models/stable-diffusion-3p5-medium",
        ),
        "large-model": fireworks.image(
          "accounts/fireworks/models/stable-diffusion-3p5-large-turbo",
        ),
      },
    });
