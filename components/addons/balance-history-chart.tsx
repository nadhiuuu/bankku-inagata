"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jul", balance: 100 },
  { name: "Aug", balance: 450 },
  { name: "Sep", balance: 320 },
  { name: "Oct", balance: 750 },
  { name: "Nov", balance: 250 },
  { name: "Dec", balance: 580 },
  { name: "Jan", balance: 500 },
];

export default function BalanceHistory() {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1814F3" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#1814F3" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid 
            strokeDasharray="3 3" 
            vertical={true} 
            horizontal={true} 
            stroke="#F3F3F5" 
          />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#718EBF", fontSize: 12 }}
            dy={10}
          />
          
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#718EBF", fontSize: 12 }}
            ticks={[0, 200, 400, 600, 800]}
            domain={[0, 800]}
          />

          <Tooltip 
            contentStyle={{ borderRadius: "10px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          />

          <Area
            type="monotone" 
            dataKey="balance"
            stroke="#1814F3"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorBalance)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}