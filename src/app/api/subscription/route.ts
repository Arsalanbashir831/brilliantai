import { NextResponse } from 'next/server';
import {

createSubscription,
listSubscriptions,
getSubscriptionByEmail,
deleteSubscription
} from '@/services/subscription-services';

// GET /api/subscription - Get all subscriptions or filter by email
export async function GET(request: Request) {
try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (email) {
        const subscription = await getSubscriptionByEmail(email);
        if (!subscription) {
            return NextResponse.json({ error: 'Subscription not found' }, { status: 404 });
        }
        return NextResponse.json(subscription);
    }

    const subscriptions = await listSubscriptions();
    return NextResponse.json(subscriptions);
} catch (error: unknown) {
    console.error('Error creating subscription:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
}
}

// POST /api/subscription - Create new subscription
export async function POST(request: Request) {
try {
    const { email } = await request.json();

    if (!email) {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Check if subscription already exists
    const existingSubscription = await getSubscriptionByEmail(email);
    if (existingSubscription) {
        return NextResponse.json({ error: 'Email already subscribed' }, { status: 409 });
    }

    const subscription = await createSubscription(email);
    return NextResponse.json(subscription, { status: 201 });
} catch (error:unknown) {
    console.error('Error creating subscription:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
}
}

// DELETE /api/subscription - Delete subscription
export async function DELETE(request: Request) {
try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'Subscription ID is required' }, { status: 400 });
    }

    const success = await deleteSubscription(id);
    if (!success) {
        return NextResponse.json({ error: 'Subscription not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Subscription deleted successfully' });
} catch (error: unknown) {
    console.error('Error deleting subscription:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
}
}