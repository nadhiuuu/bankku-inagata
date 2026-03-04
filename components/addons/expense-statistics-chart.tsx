"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface ExpenseDataItem {
  name: string;
  value: number;
  color: string;
}

interface LabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  payload: ExpenseDataItem;
}

const expenseData: ExpenseDataItem[] = [
  { name: "Entertainment", value: 30, color: "#343C6A" },
  { name: "Investment", value: 20, color: "#FA00FF" },
  { name: "Bill Expense", value: 15, color: "#FC7900" },
  { name: "Others", value: 35, color: "#1814F3" },
];

const RADIAN = Math.PI / 180;

export default function ExpenseStatistics() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent, payload } = props as LabelProps;
    if (!payload) return null;

    const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        className="font-bold select-none"
      >
        <tspan 
          x={x} 
          dy="-0.4em" 
          fontSize={isMobile ? "11" : "13"} 
          fontWeight="700"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </tspan>
        <tspan 
          x={x} 
          dy="1.2em" 
          fontSize={isMobile ? "8" : "10"}
          fontWeight="500"
        >
          {payload.name}
        </tspan>
      </text>
    );
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-2 md:p-4">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={expenseData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={isMobile ? "75%" : "85%"}
            dataKey="value"
            stroke="#ffffff"
            strokeWidth={isMobile ? 4 : 8} 
            startAngle={90}
            endAngle={450}
          >
            {expenseData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              fontSize: "12px"
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}