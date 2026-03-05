"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home, 
  Repeat, 
  User, 
  TrendingUp, 
  CreditCard,
  Wrench, 
  Award, 
  Settings, 
  BadgeDollarSign
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Transactions", href: "/transactions", icon: Repeat },
  { name: "Accounts", href: "/accounts", icon: User },
  { name: "Investments", href: "/investments", icon: TrendingUp },
  { name: "Credit Cards", href: "/credit-cards", icon: CreditCard },
  { name: "Loans", href: "/loans", icon: BadgeDollarSign },
  { name: "Services", href: "/services", icon: Wrench },
  { name: "My Privileges", href: "/my-privileges", icon: Award },
  { name: "Setting", href: "/settings", icon: Settings },
];

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-[60] lg:hidden" onClick={onClose} />
      )}

      <aside className={`fixed lg:static inset-y-0 left-0 z-[70] w-[250px] bg-white border-r transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        
        <div className="h-24 flex items-center px-8">
          <div className="flex items-center gap-2">
            <div className="flex flex-col relative w-8 h-8">
               <img src="/image/logo-bankku.png" alt="Logo" className="absolute bottom-0 right-0 w-9 h-9"/>
            </div>
            <h1 className="text-[22px] font-bold text-[#343C6A] tracking-tight">Bankku.</h1>
          </div>
        </div>

        <nav className="mt-2 flex flex-col">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-5 px-8 py-4 text-[16px] font-medium transition-all relative
                ${isActive ? "text-[#396AFF]" : "text-[#B1B1B1] hover:text-[#343C6A]"}`}
              >
                {isActive && (
                  <div className="absolute left-0 w-[6px] h-full bg-[#396AFF] rounded-r-lg" />
                )}
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}