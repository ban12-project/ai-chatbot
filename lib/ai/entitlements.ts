import type { UserType } from '@/app/(auth)/auth';
import type { ChatModel } from './models';

interface Entitlements {
  maxMessagesPerDay: number;
  availableChatModelIds: Array<ChatModel['id']>;
}

export const entitlementsByUserType: Record<UserType, Entitlements> = {
  /*
   * For users without an account
   */
  guest: {
    maxMessagesPerDay: 20,
    availableChatModelIds: ['deepseek-v3-0324', 'chat-model-reasoning'],
  },

  /*
   * For users with an account
   */
  regular: {
    maxMessagesPerDay: 100,
    availableChatModelIds: [
      "gemini-2.5-pro-exp-03-25",
      "gemini-2.0-pro-exp-02-05",
      "gemini-2.0-flash-thinking-exp",
      "gemini-2.0-flash",
      "gemini-exp-1206",
      "deepseek-v3",
      "deepseek-v3-0324",
      'chat-model-reasoning'
    ],
  },

  /*
   * TODO: For users with an account and a paid membership
   */
};
