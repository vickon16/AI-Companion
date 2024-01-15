import { redirect } from "next/navigation";
import { auth, redirectToSignIn } from "@clerk/nextjs";

import prismaDb from "@/lib/prismaDb";

import { ChatClient } from "./components/Client";

interface ChatIdPageProps {
  params: {
    chatId: string;
  };
}

const ChatIdPage = async ({ params }: ChatIdPageProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }

  const companion = await prismaDb.companion.findUnique({
    where: { id: params.chatId},
    include: {
      messages: {
        where: { userId},
        orderBy: { createdAt: "asc"},
      },
      _count: {
        select: { messages: true},
      },
    },
  });

  if (!companion) {
    return redirect("/");
  }

  return <ChatClient companion={companion} />;
};

export default ChatIdPage;
