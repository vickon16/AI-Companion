"use client";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Sidebar from "@/components/Sidebar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Menu className="w-5 h-5 flex-shrink-0" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 pt-10 w-32">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar