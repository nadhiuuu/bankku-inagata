import { CreditCard } from "lucide-react";

export default function MyCards() {
  return (
    <div className="lg:col-span-2 space-y-4">
      <div className="flex justify-between items-center px-1 md:px-0">
        <h2 className="text-xl md:text-xl font-semibold text-[#343C6A]">My Cards</h2>
        <button className="text-base font-semibold text-[#343C6A] hover:text-blue-600 transition-all">
          See All
        </button>
      </div>
      <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible pb-2 md:pb-0 snap-x snap-mandatory no-scrollbar">
        <div className="min-w-[310px] md:min-w-full h-[210px] md:h-[235px] rounded-[25px] flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] shadow-sm snap-center">
          <div className="p-5 md:p-6 pb-0">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[11px] text-white/70">Balance</p>
                <h3 className="text-lg md:text-xl font-semibold text-white mt-1">$5,756</h3>
              </div>
              <img src="/image/chip-card-white.png" alt="Chip Card White" className="w-8 h-8 md:w-9 md:h-9 object-contain" />
            </div>
            <div className="flex gap-10 md:gap-14 mt-6 md:mt-8">
              <div>
                <p className="text-[9px] text-white/70 uppercase tracking-wider">Card Holder</p>
                <p className="text-[14px] font-medium text-white">Eddy Cusuma</p>
              </div>
              <div>
                <p className="text-[9px] text-white/70 uppercase tracking-wider">Valid Thru</p>
                <p className="text-[14px] font-medium text-white">12/22</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-t from-white/20 to-white/10 h-16 md:h-20 flex items-center justify-between px-6">
            <p className="text-lg md:text-[20px] font-medium text-white tracking-widest">3778 **** **** 1234</p>
            <div className="flex -space-x-3 opacity-80">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-white/60 rounded-full" />
              <div className="w-7 h-7 md:w-8 md:h-8 bg-white/30 rounded-full" />
            </div>
          </div>
        </div>

        <div className="min-w-[310px] md:min-w-full h-[210px] md:h-[235px] rounded-[25px] flex flex-col justify-between border border-gray-200 bg-white shadow-sm snap-center">
          <div className="p-5 md:p-6 pb-0">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[11px] text-[#718EBF]">Balance</p>
                <h3 className="text-lg md:text-xl font-semibold text-[#343C6A] mt-1">$5,756</h3>
              </div>
              <img src="/image/chip-card-black.png" alt="Chip Card Black" className="w-8 h-8 md:w-9 md:h-9 object-contain" />
            </div>
            <div className="flex gap-10 md:gap-14 mt-6 md:mt-8">
              <div>
                <p className="text-[9px] text-[#718EBF] uppercase tracking-wider">Card Holder</p>
                <p className="text-[14px] font-medium text-[#343C6A]">Eddy Cusuma</p>
              </div>
              <div>
                <p className="text-[9px] text-[#718EBF] uppercase tracking-wider">Valid Thru</p>
                <p className="text-[14px] font-medium text-[#343C6A]">12/22</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 h-16 md:h-20 flex items-center justify-between px-6">
            <p className="text-lg md:text-[20px] font-medium text-[#343C6A] tracking-widest">3778 **** **** 1234</p>
            <div className="flex -space-x-3">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-[#9199AF]/40 rounded-full" />
              <div className="w-7 h-7 md:w-8 md:h-8 bg-[#9199AF]/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}