import { auth } from "@clerk/nextjs";

import prismaDb from "@/lib/prismaDb";

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userSubscription = await prismaDb.userSubscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  })

  if (!userSubscription) {
    return false;
  }

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now()

  return !!isValid;
};
