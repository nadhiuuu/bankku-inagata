"use client";
import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-full bg-white p-4 md:p-6 rounded-[20px] md:rounded-[25px]">
      <div className="h-[220px] md:h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ 
              top: 10, 
              right: 10, 
              left: isMobile ? -30 : -20, 
              bottom: 0 
            }}
            barGap={isMobile ? 5 : 12}
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
              tick={{ fill: "#718EBF", fontSize: isMobile ? 11 : 13 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#718EBF", fontSize: isMobile ? 11 : 13 }}
              ticks={[0, 100, 200, 300, 400, 500]} 
              domain={[0, 500]}
            />
            <Tooltip
              cursor={{ fill: "#f3f4f6", opacity: 0.4 }}
              contentStyle={{ 
                borderRadius: "10px", 
                border: "none", 
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                fontSize: "12px"
              }}
            />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize={isMobile ? 10 : 15}
              wrapperStyle={{ 
                paddingBottom: isMobile ? "15px" : "25px", 
                fontSize: isMobile ? "12px" : "15px",
                right: 0
              }}
            />
            <Bar
              dataKey="deposit"
              name="Deposit"
              fill="#16DBCC"
              radius={[20, 20, 20, 20]}
              barSize={isMobile ? 8 : 15}
            />
            <Bar
              dataKey="withdraw"
              name="Withdraw"
              fill="#1814F3"
              radius={[20, 20, 20, 20]}
              barSize={isMobile ? 8 : 15}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}