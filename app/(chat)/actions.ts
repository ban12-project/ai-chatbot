'use server';

import { type CoreUserMessage, generateText } from 'ai';
import { cookies } from 'next/headers';
import webpush, { type PushSubscription } from 'web-push';

import { customModel } from '@/lib/ai';
import {
  deleteMessagesByChatIdAfterTimestamp,
  deleteSubscription,
  getMessageById,
  getSubscriptionByUserId,
  saveSubscription,
  updateChatVisiblityById,
} from '@/lib/db/queries';
import type { VisibilityType } from '@/components/visibility-selector';
import { DEFAULT_MODEL_NAME } from '@/lib/ai/models';
import { auth } from '../(auth)/auth';

export async function saveModelId(model: string) {
  const cookieStore = await cookies();
  cookieStore.set('model-id', model);
}

export async function generateTitleFromUserMessage({
  message,
}: {
  message: CoreUserMessage;
}) {
  const { text: title } = await generateText({
    model: customModel(DEFAULT_MODEL_NAME),
    system: `\n
    - you will generate a short title based on the first message a user begins a conversation with
    - ensure it is not more than 80 characters long
    - the title should be a summary of the user's message
    - do not use quotes or colons`,
    prompt: JSON.stringify(message),
  });

  return title;
}

export async function deleteTrailingMessages({ id }: { id: string }) {
  const [message] = await getMessageById({ id });

  await deleteMessagesByChatIdAfterTimestamp({
    chatId: message.chatId,
    timestamp: message.createdAt,
  });
}

export async function updateChatVisibility({
  chatId,
  visibility,
}: {
  chatId: string;
  visibility: VisibilityType;
}) {
  await updateChatVisiblityById({ chatId, visibility });
}

webpush.setVapidDetails(
  'mailto:coda@ban12.com',
  // biome-ignore lint: Forbidden non-null assertion.
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  // biome-ignore lint: Forbidden non-null assertion.
  process.env.VAPID_PRIVATE_KEY!,
);

export async function subscribeUser(sub: PushSubscription) {
  const session = await auth();
  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }

  const userId = session.user?.id;
  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }
  await saveSubscription({ sub, userId });
}

export async function unsubscribeUser() {
  const session = await auth();
  if (!session) {
    return new Response('Unauthorized', { status: 401 });
  }

  const userId = session.user?.id;
  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  await deleteSubscription({ userId });
}

export async function sendNotification({
  userId,
  title,
  message,
}: { userId?: string; title: string; message: string }) {
  if (!userId) userId = await auth().then((session) => session?.user?.id);

  if (!userId) {
    return new Response('Bad Request', { status: 400 });
  }

  const { subscription } = await getSubscriptionByUserId({ userId });

  if (!subscription) {
    return new Response('No subscription available', { status: 400 });
  }

  try {
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title,
        body: message,
      }),
    );
    return { success: true };
  } catch (error) {
    console.error('Error sending push notification:', error);
    return { success: false, error: 'Failed to send notification' };
  }
}
