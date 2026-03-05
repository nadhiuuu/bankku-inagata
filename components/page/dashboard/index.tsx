import MyCards from "@/components/addons/my-cards-card"
import RecentTransactions from "@/components/addons/recent-transactions.-card"
import WeeklyActivityChart from "@/components/addons/weekly-activity-chart"
import ExpenseStatistics from "@/components/addons/expense-statistics-chart"
import QuickTransfer from "@/components/addons/quick-transfer-card"
import BalanceHistory from "@/components/addons/balance-history-chart"

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-2 pb-6 space-y-8 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <MyCards />
        <RecentTransactions />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-2">
          <h2 className="text-xl md:text-xl font-semibold text-[#343C6A]">Weekly Activity</h2>
          <div className="bg-white rounded-[25px] p-4 md:p-2 shadow-sm border border-gray-50 h-[300px] md:h-[350px]">
            <WeeklyActivityChart />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl md:text-xl font-semibold text-[#343C6A]">Expense Statistics</h2>
          <div className="bg-white rounded-[25px] shadow-sm border border-gray-50 h-[320px] md:h-[350px] overflow-hidden">
            <ExpenseStatistics />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <QuickTransfer />
        <div className="lg:col-span-3 space-y-4">
          <h2 className="text-xl md:text-xl font-bold text-[#343C6A]">Balance History</h2>
          <div className="bg-white rounded-[25px] p-6 shadow-sm border border-gray-50 h-[260px]">
            <BalanceHistory />
          </div>
        </div>
      </div>
    </div>
  );
}