import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount || 1000,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
      description: 'StripePay Demo - Embedded Payment',
      metadata: {
        integration_type: 'embedded_widget',
        product: 'demo_product'
      }
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err: any) {
    console.error('Stripe Intent Error:', err);
    return NextResponse.json(
      { error: err.message || 'Failed to initialize payment' }, 
      { status: 500 }
    );
  }
}