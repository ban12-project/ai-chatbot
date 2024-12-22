import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import { auth } from '@/app/(auth)/auth';

// Use Blob instead of File since File is not available in Node.js environment
const FileSchema = z.object({
  file: z
    .instanceof(Blob)
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: 'File size should be less than 5MB',
    })
    // Update the file type based on the kind of files you want to accept
    .refine((file) => ['image/jpeg', 'image/png'].includes(file.type), {
      message: 'File type should be JPEG or PNG',
    }),
});

export async function POST(request: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (request.body === null) {
    return new Response('Request body is empty', { status: 400 });
  }

  try {
    const formData = await request.formData();
    const contentType = formData.get('contentType') as string;

    if (!contentType) {
      return NextResponse.json({ error: 'No file contentType' }, { status: 400 });
    }

    const client = new S3Client({
      region: process.env.S3_BUCKET_REGION,
      endpoint: process.env.S3_BUCKET_ENDPOINT,
      credentials: {
        // biome-ignore lint: Forbidden non-null assertion.
        accessKeyId: process.env.S3_BUCKET_ACCESS_KEY_ID!,
        // biome-ignore lint: Forbidden non-null assertion.
        secretAccessKey: process.env.S3_BUCKET_SECRET_ACCESS_KEY!,
      },
    })

    const url = await getSignedUrl(
      client,
      new PutObjectCommand({
        // biome-ignore lint: Forbidden non-null assertion.
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: 'chat/' + globalThis.crypto.randomUUID(),
        ACL: 'public-read',
        ContentType: contentType,
      }),
      { expiresIn: 600 },
    )

    return NextResponse.json({ url, domain: process.env.S3_DOMAIN })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    );
  }
}
