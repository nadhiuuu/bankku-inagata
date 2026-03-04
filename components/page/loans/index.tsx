"use client";

import React from "react";
import ActiveLoansTable from "@/components/addons/active-loans-table";
import { User, Briefcase, TrendingUp, Wrench } from "lucide-react";

const loanStats = [
  {
    title: "Personal Loans",
    amount: "$50,000",
    icon: <User size={22} className="text-[#396AFF]" />,
    bgColor: "bg-[#E7EDFF]",
  },
  {
    title: "Corporate Loans",
    amount: "$100,000",
    icon: <Briefcase size={22} className="text-[#FFBB38]" />,
    bgColor: "bg-[#FFF5D9]",
  },
  {
    title: "Business Loans",
    amount: "$500,000",
    icon: <TrendingUp size={22} className="text-[#FE5C73]" />,
    bgColor: "bg-[#FFE0EB]",
  },
  {
    title: "Custom Loans",
    amount: "Choose Money",
    icon: <Wrench size={22} className="text-[#16DBCC]" />,
    bgColor: "bg-[#DCFAF8]",
  },
];

export default function LoansPage() {
  return (
    <div className="max-w-7xl mx-auto px-2 py-2">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {loanStats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[20px] p-4 flex items-center gap-3 shadow-sm border border-gray-50 transition-all hover:shadow-md"
          >
            <div className={`w-11 h-11 md:w-14 md:h-14 rounded-full ${item.bgColor} flex items-center justify-center shrink-0`}>
              {item.icon}
            </div>

            <div className="flex flex-col min-w-0">
              <p className="text-[#718EBF] text-[12px] md:text-sm font-medium truncate">
                {item.title}
              </p>
              <h3 className="text-[15px] md:text-lg font-bold text-[#232323] leading-tight">
                {item.amount}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <ActiveLoansTable />
    </div>
  );
}