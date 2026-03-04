"use client";

import { Search, Settings, Bell, Menu } from "lucide-react";

export default function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="bg-white border-b lg:h-20 flex flex-col lg:flex-row lg:items-center justify-center lg:justify-between px-5 lg:px-10 py-4 lg:py-0 gap-4 lg:gap-0">
      
      {/* BARIS ATAS: Hamburger, Title, Avatar */}
      <div className="flex items-center justify-between w-full lg:w-auto relative">
        {/* Hamburger (Mobile Only) */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-1 text-[#343C6A]"
        >
          <Menu size={24} />
        </button>

        {/* Title: Di mobile tengah, di desktop kiri */}
        <h2 className="text-xl lg:text-2xl font-semibold text-[#343C6A] lg:static absolute left-1/2 -translate-x-1/2 lg:translate-x-0">
          Overview
        </h2>

        {/* Avatar Mobile Only */}
        <div className="lg:hidden w-9 h-9 rounded-full overflow-hidden">
          <img 
            src="https://i.pravatar.cc/150?u=bankku" 
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* BARIS BAWAH (Mobile) / KANAN (Desktop) */}
      <div className="flex items-center gap-4 w-full lg:w-auto">
        
        {/* Search Bar: Full width di mobile */}
        <div className="relative flex-1 lg:flex-none">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8BA3CB]"
          />
          <input
            type="text"
            placeholder="Search for something"
            className="w-full lg:w-[255px] pl-11 pr-4 py-3 text-sm border-none rounded-full bg-[#F5F7FA] text-[#8BA3CB] focus:outline-none"
          />
        </div>

        {/* Desktop Buttons & Avatar (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="w-11 h-11 rounded-full bg-[#F5F7FA] flex items-center justify-center text-[#718EBF] hover:bg-gray-100 transition">
            <Settings size={20} />
          </button>
          <button className="w-11 h-11 rounded-full bg-[#F5F7FA] flex items-center justify-center text-[#FE5C73] hover:bg-gray-100 transition">
            <Bell size={20} />
          </button>
          <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 ml-2 shadow-sm">
            <img 
              src="https://i.pravatar.cc/150?u=bankku" 
              alt="User Desktop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}