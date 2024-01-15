"use client";

import { FC, useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
  loader?: React.ReactNode;
}

const ClientOnly: FC<ClientOnlyProps> = ({ children, loader }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    if (loader) return loader;
    else return null;
  }

  return children;
};

export default ClientOnly;
