"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, MessageSquare, User, Cpu } from "lucide-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Главная",
      link: "#home",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "AI-assist",
      link: "https://terminal.filatiev.pro/",
      icon: <Cpu className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Контакты",
      link: "#contact",
      icon: (
        <MessageSquare className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "IT",
      link: "https://it.filatiev.pro/",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
