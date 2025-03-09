import React from "react";

import { twMerge } from "tailwind-merge";

export const HighlightText = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <span className={twMerge("bg-gray-200 rounded px-1 py-0.5 text-orange-500", className)}>{children}</span>;
};
