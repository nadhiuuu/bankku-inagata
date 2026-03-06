"use client";
import React, { useState, useRef, useEffect } from "react";
import { Search, Bell, Settings, User, LogOut, Shield, ChevronDown } from "lucide-react";
import Link from "next/link";

type AppNavbarProps = {
  onMenuClick: () => void;
};

export default function AppNavbar({ onMenuClick }: AppNavbarProps) {
  const [activeMenu, setActiveMenu] = useState<"notifications" | "profile" | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (menu: "notifications" | "profile") => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <nav className="w-full bg-white px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 border-b border-[#E6EFF5] md:border-none relative z-50">
      <h1 className="text-[20px] md:text-[28px] font-semibold text-[#343C6A] w-full md:w-auto text-center md:text-left">
        Overview
      </h1>

      <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4 md:gap-6" ref={menuRef}>
        <div className="relative flex-1 md:flex-none group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718EBF] transition-colors duration-300 group-focus-within:text-[#1814F3]">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search for something"
            className="w-full md:w-[255px] h-[40px] md:h-[50px] pl-12 pr-4 bg-[#F5F7FA] border-none rounded-full text-[13px] md:text-[15px] text-[#232323] outline-none transition-all duration-300 placeholder:text-[#8BA3CB] focus:bg-white focus:ring-2 focus:ring-[#1814F3]/20 focus:shadow-[0_0_20px_rgba(24,20,243,0.15)]"
          />
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <Link 
            href="/settings"
            className="p-2.5 md:p-3 bg-[#F5F7FA] rounded-full text-[#718EBF] hover:text-[#1814F3] hover:bg-white hover:shadow-md transition-all duration-300"
          >
            <Settings size={20} />
          </Link>

          <div className="relative">
            <button 
              onClick={() => toggleMenu("notifications")}
              className={`p-2.5 md:p-3 rounded-full transition-all duration-300 ${activeMenu === 'notifications' ? 'bg-[#FE5C73] text-white shadow-lg' : 'bg-[#F5F7FA] text-[#FE5C73] hover:shadow-[0_0_15px_rgba(254,92,115,0.2)]'}`}
            >
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>

            {activeMenu === "notifications" && (
              <div className="absolute right-0 mt-3 w-64 md:w-80 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 py-3 animate-in fade-in zoom-in duration-200">
                <div className="px-4 pb-2 font-bold text-[#343C6A] border-b border-gray-50 mb-2">Notifications</div>
                <div className="max-h-[300px] overflow-y-auto">
                  <div className="px-4 py-3 hover:bg-[#F5F7FA] cursor-pointer transition-colors border-b border-gray-50 last:border-0">
                    <p className="text-[10px] text-[#718EBF] mb-1">2 mins ago</p>
                    <p className="text-sm text-[#343C6A] font-medium leading-snug">Transfer of $480.00 from Satya was successful.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button 
              onClick={() => toggleMenu("profile")}
              className="flex items-center gap-2 focus:outline-none"
            >
              <div className={`w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full overflow-hidden border-2 transition-all duration-300 ${activeMenu === 'profile' ? 'border-[#1814F3] scale-105 shadow-md' : 'border-[#E6EFF5] hover:border-[#1814F3]'}`}>
                <img 
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d" 
                  alt="User" 
                  className="w-full h-full object-cover"
                />
              </div>
            </button>

            {activeMenu === "profile" && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 py-2 animate-in fade-in zoom-in duration-200">
                <div className="px-4 py-2 border-b border-gray-50 mb-1">
                  <p className="text-sm font-bold text-[#343C6A]">Charlene Reed</p>
                  <p className="text-[11px] text-[#718EBF]">charlenereed@gmail.com</p>
                </div>
                <Link href="/settings" className="w-full px-4 py-2.5 text-left text-sm text-[#343C6A] hover:bg-[#F5F7FA] flex items-center gap-3 transition-colors">
                  <User size={16} className="text-[#718EBF]" /> My Profile
                </Link>
                <div className="h-[1px] bg-gray-100 my-1 mx-2" />
                <button className="w-full px-4 py-2.5 text-left text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}