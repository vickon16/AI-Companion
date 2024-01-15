"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import ClientOnly from "./ClientOnly";
import { Skeleton } from "./ui/skeleton";
import MobileSidebar from "./MobileSidebar";
import { useProModal } from "@/hooks/use-pro-modal";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export default function Navbar({isPro} : {isPro : boolean}) {
  const proModal = useProModal();



  return (
    <nav className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-b-muted/80 h-16">
      <div className="flex items-center">
        <MobileSidebar isPro={isPro} />
        <Link href={"/"}>
          <h1
            className={cn(
              `hidden md:block text-xl md:text-3xl text-primary font-bold`,
              font.className
            )}
          >
            companion.ai
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-x-3">
        {!isPro && <Button variant="premium" onClick={proModal.onOpen}>
          Upgrade <Sparkles className="w-4 h-4 fill-white text-white ml-1" />
        </Button>}
        <ThemeToggle />
        <ClientOnly
          loader={<Skeleton className="w-[35px] h-[35px] rounded-full" />}
        >
          <UserButton afterSignOutUrl="/" />
        </ClientOnly>
      </div>
    </nav>
  );
}
