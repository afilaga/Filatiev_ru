import { readFileSync } from "node:fs";
import { join } from "node:path";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Cpu, Home, MessageSquare, User } from "lucide-react";

export default function HomePage() {
  const legacyBodyPath = join(process.cwd(), "public", "legacy-body.html");
  const legacyBody = readFileSync(legacyBodyPath, "utf8");

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
    <>
      <FloatingNav navItems={navItems} />
      <main dangerouslySetInnerHTML={{ __html: legacyBody }} />
    </>
  );
}
