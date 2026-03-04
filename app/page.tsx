import { Wallet, DollarSign, CreditCard } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6 overflow-hidden">
      
      {/* Layout Utama */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* SEKSI KIRI: MY CARDS */}
        <div className="lg:col-span-2 space-y-5 overflow-hidden">
          
          {/* Header: Mengikuti alignment kartu */}
          <div className="flex justify-between items-end px-1 md:px-0">
            <h2 className="text-2xl font-bold text-[#343C6A]">My Cards</h2>
            <button className="text-[17px] font-semibold text-[#343C6A] hover:text-blue-600 transition-all">
              See All
            </button>
          </div>

          {/* Container Scrollable untuk Mobile */}
          <div className="flex md:grid md:grid-cols-2 gap-7 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory no-scrollbar">
            
            {/* KARTU BIRU */}
            <div className="min-w-[320px] md:min-w-full h-[235px] rounded-[25px] flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] shadow-sm snap-center">
              <div className="p-6 pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[12px] text-white/70">Balance</p>
                    <h3 className="text-xl font-semibold text-white mt-1">$5,756</h3>
                  </div>
                  <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                     <CreditCard className="text-white" size={24} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="flex gap-14 mt-8">
                  <div>
                    <p className="text-[10px] text-white/70 uppercase tracking-wider">Card Holder</p>
                    <p className="text-[15px] font-medium text-white">Eddy Cusuma</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/70 uppercase tracking-wider">Valid Thru</p>
                    <p className="text-[15px] font-medium text-white">12/22</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-t from-white/20 to-white/10 h-20 flex items-center justify-between px-6">
                <p className="text-[22px] font-medium text-white tracking-widest">
                  3778 **** **** 1234
                </p>
                <div className="flex -space-x-3 opacity-80">
                  <div className="w-8 h-8 bg-white/60 rounded-full" />
                  <div className="w-8 h-8 bg-white/30 rounded-full" />
                </div>
              </div>
            </div>

            {/* KARTU PUTIH */}
            <div className="min-w-[320px] md:min-w-full h-[235px] rounded-[25px] flex flex-col justify-between border border-gray-200 bg-white shadow-sm snap-center">
              <div className="p-6 pb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[12px] text-[#718EBF]">Balance</p>
                    <h3 className="text-xl font-semibold text-[#343C6A] mt-1">$5,756</h3>
                  </div>
                  <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                     <CreditCard className="text-gray-400" size={24} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="flex gap-14 mt-8">
                  <div>
                    <p className="text-[10px] text-[#718EBF] uppercase tracking-wider">Card Holder</p>
                    <p className="text-[15px] font-medium text-[#343C6A]">Eddy Cusuma</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-[#718EBF] uppercase tracking-wider">Valid Thru</p>
                    <p className="text-[15px] font-medium text-[#343C6A]">12/22</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 h-20 flex items-center justify-between px-6">
                <p className="text-[22px] font-medium text-[#343C6A] tracking-widest">
                  3778 **** **** 1234
                </p>
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 bg-[#9199AF]/40 rounded-full" />
                  <div className="w-8 h-8 bg-[#9199AF]/20 rounded-full" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SEKSI KANAN: RECENT TRANSACTIONS */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-[#343C6A]">Recent Transaction</h2>
          <div className="bg-white rounded-[25px] p-6 h-[235px] flex flex-col justify-around shadow-sm border border-gray-50 md:border-none">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFF5D9] flex items-center justify-center shrink-0">
                  <Wallet size={24} className="text-[#FFBB38]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold text-gray-800 truncate">Deposit from my Card</p>
                  <p className="text-sm text-[#718EBF]">28 Jan 2021</p>
                </div>
              </div>
              <p className="text-base font-bold text-[#FF4B4A] shrink-0">-$850</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E7EDFF] flex items-center justify-center shrink-0">
                  <DollarSign size={24} className="text-[#396AFF]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold text-gray-800 truncate">Deposit Paypal</p>
                  <p className="text-sm text-[#718EBF]">25 Jan 2021</p>
                </div>
              </div>
              <p className="text-base font-bold text-[#41D4A8] shrink-0">+$2,500</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#DCFAF8] flex items-center justify-center shrink-0">
                  <DollarSign size={24} className="text-[#16DBCC]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold text-gray-800 truncate">Jemi Wilson</p>
                  <p className="text-sm text-[#718EBF]">21 Jan 2021</p>
                </div>
              </div>
              <p className="text-base font-bold text-[#41D4A8] shrink-0">+$5,400</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}