"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Sat", deposit: 480, withdraw: 250 },
  { name: "Sun", deposit: 350, withdraw: 120 },
  { name: "Mon", deposit: 310, withdraw: 250 },
  { name: "Tue", deposit: 480, withdraw: 350 },
  { name: "Wed", deposit: 150, withdraw: 250 },
  { name: "Thu", deposit: 390, withdraw: 250 },
  { name: "Fri", deposit: 400, withdraw: 320 },
];

export default function WeeklyActivityChart() {
  return (
    <div className="w-full h-full bg-white p-6 rounded-[25px]">
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            barGap={12}
          >
            <CartesianGrid 
              vertical={false} 
              stroke="#F3F3F5" 
              strokeDasharray="0" 
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#718EBF", fontSize: 13 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#718EBF", fontSize: 13 }}
              ticks={[0, 100, 200, 300, 400, 500]} 
              domain={[0, 500]}
            />
            <Tooltip
              cursor={{ fill: "#f3f4f6", opacity: 0.4 }}
              contentStyle={{ borderRadius: "10px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
            />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize={15}
              wrapperStyle={{ paddingBottom: "25px", fontSize: "15px" }}
            />
            {/* Bar Deposit */}
            <Bar
              dataKey="deposit"
              name="Deposit"
              fill="#16DBCC"
              radius={[20, 20, 20, 20]}
              barSize={15}
            />
            {/* Bar Withdraw */}
            <Bar
              dataKey="withdraw"
              name="Withdraw"
              fill="#1814F3"
              radius={[20, 20, 20, 20]}
              barSize={15}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}