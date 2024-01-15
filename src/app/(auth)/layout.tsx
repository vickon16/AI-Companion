import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex items-center justify-center h-full">{children}</main>
  );
}
