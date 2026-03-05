import { CreditCard, DollarSign } from "lucide-react";

export default function RecentTransactions() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-xl font-semibold text-[#343C6A]">Recent Transaction</h2>
      <div className="bg-white rounded-[25px] p-5 h-[210px] md:h-[235px] flex flex-col justify-between shadow-sm border border-gray-50 md:border-none">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FFF5D9] flex items-center justify-center shrink-0">
              <CreditCard size={20} className="text-[#FFBB38]" />
            </div>
            <div className="min-w-0">
              <p className="text-sm md:text-[15px] font-semibold text-gray-800 truncate">Deposit from my Card</p>
              <p className="text-xs text-[#718EBF]">28 January 2021</p>
            </div>
          </div>
          <p className="text-sm md:text-base font-semibold text-[#FF4B4A] shrink-0">-$850</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E7EDFF] flex items-center justify-center shrink-0">
              <DollarSign size={20} className="text-[#396AFF]" />
            </div>
            <div className="min-w-0">
              <p className="text-sm md:text-[15px] font-semibold text-gray-800 truncate">Deposit Paypal</p>
              <p className="text-xs text-[#718EBF]">25 January 2021</p>
            </div>
          </div>
          <p className="text-sm md:text-base font-semibold text-[#41D4A8] shrink-0">+$2,500</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#DCFAF8] flex items-center justify-center shrink-0">
              <DollarSign size={20} className="text-[#16DBCC]" />
            </div>
            <div className="min-w-0">
              <p className="text-sm md:text-[15px] font-semibold text-gray-800 truncate">Jemi Wilson</p>
              <p className="text-xs text-[#718EBF]">21 January 2021</p>
            </div>
          </div>
          <p className="text-sm md:text-base font-semibold text-[#41D4A8] shrink-0">+$5,400</p>
        </div>
      </div>
    </div>
  );
}