import CompanionForm from "@/components/CompanionForm";
import prismaDb from "@/lib/prismaDb";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import React from "react";

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanionIdPage = async ({ params }: CompanionIdPageProps) => {
  const { userId } = auth();
  if (!userId) {
    return redirectToSignIn();
  }

  // Todo Check subscription;

  const companion = await prismaDb.companion.findUnique({
    where: {
      id: params.companionId,
      userId,
    },
  });

  const categories = await prismaDb.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
};

export default CompanionIdPage;
