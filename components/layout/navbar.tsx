"use client";

import useToggle from "@/hooks/use-state-toggle";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Thư viện ảnh", href: "#" },
];

export default function Navbar() {
  const sidebar = useToggle();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-20 h-14 bg-[#4F474E]"
      initial={{ y: 0 }}
      animate={{ y: hidden ? -56 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4 text-white">
        <Link href={"/"}>
          <div className="font-bold">Hội thi Tên lửa nước</div>
        </Link>
        <div className="hidden items-center gap-4 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-colors ${
                pathname === item.href
                  ? "font-bold text-sky-500"
                  : "hover:text-gray-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="cursor-pointer lg:hidden">
          <Menu className="text-white" size={24} onClick={sidebar.open} />
        </div>
      </div>
      <Sidebar isOpen={sidebar.isOpen} onClose={sidebar.toggle} />
    </motion.div>
  );
}
