import { db } from "@/firebase/admin";
import type { Subscription } from "@/types/subscription";
// Create a new subscription
export async function createSubscription(email: string): Promise<Subscription> {
    const subscriptionRef = db.ref("subscriptions").push();
    const id = subscriptionRef.key!;
    const subscribedDate = new Date().toISOString();

    const payload: Omit<Subscription, "id"> = {
        email,
        subscribedDate,
    };

    await subscriptionRef.set(payload);
    return { id, ...payload } as Subscription;
}

// List all subscriptions
export async function listSubscriptions(): Promise<Subscription[]> {
    const snapshot = await db.ref("subscriptions").once("value");
    const raw: Record<string, Omit<Subscription, "id">> = snapshot.val() || {};
    return Object.entries(raw).map(([id, data]) => ({
        id,
        ...data,
    }) as Subscription);
}

// Get a subscription by ID
export async function getSubscriptionById(id: string): Promise<Subscription | null> {
    const snapshot = await db.ref(`subscriptions/${id}`).once("value");
    const data = snapshot.val();
    if (!data) return null;
    return { id, ...(data as Omit<Subscription, "id">) } as Subscription;
}

// Get subscription by email
export async function getSubscriptionByEmail(email: string): Promise<Subscription | null> {
    const snapshot = await db.ref("subscriptions")
        .orderByChild("email")
        .equalTo(email)
        .once("value");
    
    const data = snapshot.val();
    if (!data) return null;
    
    const [id, subscription] = Object.entries(data)[0];
    return { id, ...(subscription as Omit<Subscription, "id">) } as Subscription;
}

// Delete a subscription
export async function deleteSubscription(id: string): Promise<boolean> {
    const subscriptionRef = db.ref(`subscriptions/${id}`);
    const snapshot = await subscriptionRef.once("value");
    if (!snapshot.exists()) return false;

    await subscriptionRef.remove();
    return true;
}