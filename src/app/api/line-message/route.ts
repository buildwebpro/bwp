import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;

    // ส่งข้อความผ่าน Line Messaging API
    const response = await fetch('https://api.line.me/v2/bot/message/push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        to: process.env.LINE_USER_ID,
        messages: [{
          type: 'text',
          text: message
        }]
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send Line message');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending Line message:', error);
    return NextResponse.json(
      { error: 'Failed to send Line message' },
      { status: 500 }
    );
  }
} 