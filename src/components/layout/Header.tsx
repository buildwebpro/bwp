"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationLinks = [
    { name: "หน้าหลัก", href: "/" },
    { name: "บริการ", href: "/services" },
    { name: "ผลงาน", href: "/projects" },
    { name: "เกี่ยวกับ", href: "/about" },
    { name: "บทความ", href: "/blog" },
    { name: "ติดต่อเรา", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <img src="https://scontent.fbkk23-1.fna.fbcdn.net/v/t39.30808-1/444761717_10163501759810558_117263772520150492_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=K0HWHGwzJaYQ7kNvgFFXup3&_nc_oc=Adn_efw5laIFY-pnP7GRCfflbyXn0BEttmyGHfmXfXD1THJmudXrXfIfCN_EUUPLudU&_nc_zt=24&_nc_ht=scontent.fbkk23-1.fna&_nc_gid=fTqzivgqxknjuqI-tWfZKw&oh=00_AYFpgAcj3XkYpU5MszC3WESqjDYlpYHInmNzcuAhKoBIvw&oe=67E73E9B" height={64} width={64} /> 
          </Link>
          <nav className="hidden md:flex gap-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Button asChild variant="default" className="hidden md:inline-flex">
            <Link href="/contact" className="font-sans">ขอใบเสนอราคา</Link>
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-4 flex items-center gap-4">
                  <ThemeToggle />
                  <span className="text-sm">เปลี่ยนธีม เข้ม/สว่าง</span>
                </div>
                <Button asChild className="mt-4">
                  <Link href="/contact" onClick={closeMenu} className="font-sans">
                    ขอใบเสนอราคา
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
