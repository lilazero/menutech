import { auth } from '@clerk/nextjs/server';

export async function getUserFromClerkAuth() {
  try {
    const { userId } = auth();

    return userId;
  } catch (error) {
    console.error('Error retrieving user from Clerk:', error);
    return null;
  }
}
