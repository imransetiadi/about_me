/* eslint-disable */
import React from "react";
import { vi } from "vitest";

// Mock Next.js Image component
vi.mock("next/image", () => ({
  default: function MockImage({ src, alt, priority, unoptimized, ...props }: any) {
    return React.createElement("img", { src, alt, ...props });
  },
}));

// Mock Next.js Link component
vi.mock("next/link", () => ({
  default: function MockLink({ children, href, ...props }: any) {
    return React.createElement("a", { href, ...props }, children);
  },
}));

// Mock framer-motion to render children directly without animations
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => React.createElement("div", props, children),
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
} as any;
