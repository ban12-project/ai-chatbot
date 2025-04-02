export const DEFAULT_CHAT_MODEL: string = "gemini-2.0-flash";

interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: "gemini-2.5-pro-exp-03-25",
    name: "Gemini 2.5 Pro Exp 03-25",
    description:
      "Gemini 2.5 Pro Experimental 是我们最先进的思考模型，能够推理代码、数学和 STEM 领域的复杂问题，以及使用长上下文分析大型数据集、代码库和文档。",
  },
  {
    id: "gemini-2.0-pro-exp-02-05",
    name: "Gemini 2.0 Pro Exp 02-05",
    description:
      "Improved quality, especially for world knowledge, code, and long context",
  },
  {
    id: "gemini-2.0-flash-thinking-exp",
    name: "Gemini 2.0 Flash Thinking Exp",
    description: "Reasoning for complex problems, features a new Thinking mode",
  },
  {
    id: "gemini-2.0-flash",
    name: "Gemini 2.0 Flash",
    description:
      "Next generation features, speed, and multimodal generation for a diverse variety of tasks",
  },
  {
    id: "gemini-exp-1206",
    name: "Gemini Exp 1206",
    description: "Quality improvements, celebrate 1 year of Gemini",
  },
  {
    id: "deepseek-v3",
    name: "DeepSeek v3",
    description: "DeepSeek v3",
  },
  {
    id: "deepseek-v3-0324",
    name: "DeepSeek v3 0324",
    description: "DeepSeek v3 0324",
  },
  {
    id: "chat-model-reasoning",
    name: "Reasoning model",
    description: "Uses advanced reasoning",
  },
];
