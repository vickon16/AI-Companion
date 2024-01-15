"use client";

import { useProModal } from "@/hooks/use-pro-modal";
import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const routes = [
  {
    icon: Home,
    href: "/",
    label: "Home",
    pro: false,
  },
  {
    icon: Plus,
    href: "/companion/new",
    label: "Create",
    pro: true,
  },
  {
    icon: Settings,
    href: "/settings",
    label: "Settings",
    pro: false,
  },
];

const Sidebar = ({isPro}  : {isPro  : boolean}) => {
  const pathname = usePathname();
  const router = useRouter();
  const proModal = useProModal();

  const onNavigate = (url: string, pro : boolean) => {
    if (pro && !isPro) return proModal.onOpen()
    router.push(url);
  }

  return (
    <aside className="h-full text-primary border-r border-r-muted/80 min-w-[100px]">
      <div className="p-3 mt-4 gap-y-2 flex flex-col">
        {routes.map((route, i) => (
          <div
            key={route.href}
            className={cn(
              "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
              {
                "bg-primary/10 text-primary": pathname === route.href,
              }
            )}
            onClick={() => onNavigate(route.href, route.pro)}
          >
            <div className="flex flex-col gap-y-2 items-center flex-1">
              <route.icon className="w-5 h-5" />
              <span>{route.label}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
