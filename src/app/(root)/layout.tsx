import ClientOnly from "@/components/ClientOnly";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { checkSubscription } from "@/lib/subscription";
import { PropsWithChildren } from "react";

const RootLayout = async ({ children }: PropsWithChildren) => {
  const isPro = await checkSubscription();
  return (
    <div className="h-full">
      <Navbar isPro={isPro} />
      <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
        <ClientOnly>
          <Sidebar isPro={isPro} />
        </ClientOnly>
      </div>
      <main className="md:pl-28 pt-[4.5rem] h-full">{children}</main>
    </div>
  );
};

export default RootLayout;
