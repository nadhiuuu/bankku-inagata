"use client";
import React, { useRef } from "react";
import { ChevronRight, ChevronLeft, Send } from "lucide-react";

export default function QuickTransfer() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 150;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const users = [
    { name: "Livia Bator", role: "CEO", img: "https://i.pravatar.cc/150?u=livia" },
    { name: "Randy Press", role: "Director", img: "https://i.pravatar.cc/150?u=randy" },
    { name: "Workman", role: "Designer", img: "https://i.pravatar.cc/150?u=workman" },
    { name: "Eddy", role: "Manager", img: "https://i.pravatar.cc/150?u=eddy" },
    { name: "Mila", role: "Dev", img: "https://i.pravatar.cc/150?u=mila" },
    { name: "Justin", role: "IT", img: "https://i.pravatar.cc/150?u=justin" },
  ];

  return (
    <div className="lg:col-span-2 space-y-4">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      <h2 className="text-xl md:text-xl font-semibold text-[#343C6A]">Quick Transfer</h2>
      
      <div className="bg-white rounded-[25px] p-6 shadow-sm border border-gray-50 h-[260px] flex flex-col justify-between">
        
        <div className="flex items-center gap-2 relative">
          <button 
            onClick={() => scroll("left")}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-md border border-gray-50 flex items-center justify-center text-[#718EBF] hover:shadow-lg transition-all active:scale-95 z-10"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          <div 
            ref={scrollRef} 
            className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-2 flex-1"
          >
            {users.map((user, index) => (
              <div key={index} className="flex flex-col items-center space-y-3 text-center min-w-[80px] flex-shrink-0">
                <img src={user.img} alt={user.name} className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover" />
                <div className="leading-tight">
                  <p className="text-sm font-bold text-[#232323]">{user.name}</p>
                  <p className="text-[12px] text-[#718EBF] font-medium">{user.role}</p>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll("right")} 
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-md border border-gray-50 flex items-center justify-center text-[#718EBF] hover:shadow-lg transition-all active:scale-95 z-10"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[#718EBF] text-sm md:text-base whitespace-nowrap">Write Amount</span>
          <div className="relative flex-1">
            <input type="text" placeholder="525.50" className="w-full bg-[#EDF1F7] rounded-full py-3.5 px-6 pr-32 text-[#718EBF] focus:outline-none font-medium placeholder:text-[#718EBF]/40" />
            <button className="absolute right-0 top-0 bottom-0 bg-[#1814F3] text-white rounded-full px-6 flex items-center gap-3 hover:bg-[#110db3] transition-all shadow-lg active:scale-95">
              <span className="font-semibold text-sm md:text-base">Send</span>
              <Send size={18} fill="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}