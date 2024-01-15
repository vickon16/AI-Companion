import { PropsWithChildren } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "../ui/toaster";
import ProModal from "../ProModal";
import ClientOnly from "../ClientOnly";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Toaster />
      <ClientOnly>
        <ProModal />
      </ClientOnly>
    </ThemeProvider>
  );
};

export default Providers;
