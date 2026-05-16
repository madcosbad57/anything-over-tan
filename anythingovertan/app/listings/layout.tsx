import type { Metadata } from "next";

import { BROWSE_META } from "@/lib/browsePlaceholder";

export const metadata: Metadata = {
  title: BROWSE_META.title,
  description: "Browse enthusiast listings on anythingovertan.",
};

export default function ListingsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
