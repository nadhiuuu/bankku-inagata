"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const loansData = [
  { id: "01.", amount: "$100,000", left: "$40,500", duration: "8 Months", rate: "12%", installment: "$2,000 / month" },
  { id: "02.", amount: "$500,000", left: "$250,000", duration: "36 Months", rate: "10%", installment: "$8,000 / month" },
  { id: "03.", amount: "$900,000", left: "$40,500", duration: "12 Months", rate: "12%", installment: "$5,000 / month" },
  { id: "04.", amount: "$50,000", left: "$40,500", duration: "25 Months", rate: "5%", installment: "$2,000 / month" },
  { id: "05.", amount: "$50,000", left: "$40,500", duration: "5 Months", rate: "16%", installment: "$10,000 / month" },
  { id: "06.", amount: "$80,000", left: "$25,500", duration: "14 Months", rate: "8%", installment: "$2,000 / month" },
  { id: "07.", amount: "$12,000", left: "$5,500", duration: "9 Months", rate: "13%", installment: "$500 / month" },
  { id: "08.", amount: "$160,000", left: "$100,800", duration: "3 Months", rate: "12%", installment: "$900 / month" },
];

export default function ActiveLoansTable() {
  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-xl font-semibold text-[#343C6A] px-1">Active Loans Overview</h2>
      
      <div className="bg-white rounded-[25px] overflow-hidden shadow-sm border border-gray-50">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-100 hover:bg-transparent">
              <TableHead className="py-4 px-6 text-[#718EBF] font-medium text-sm whitespace-nowrap">SL No</TableHead>
              <TableHead className="py-4 px-6 text-[#718EBF] font-medium text-sm whitespace-nowrap">Loan Money</TableHead>
              <TableHead className="py-4 px-6 text-[#718EBF] font-medium text-sm whitespace-nowrap">Left to repay</TableHead>
              <TableHead className="py-4 px-6 text-[#718EBF] font-medium text-sm whitespace-nowrap">Duration</TableHead>
              <TableHead className="py-4 px-6 text-[#718EBF] font-medium text-sm whitespace-nowrap">Interest rate</TableHead>
              <TableHead className="py-4 px-6 text-[#718EBF] font-medium text-sm whitespace-nowrap">Installment</TableHead>
              <TableHead className="py-4 px-6 text-[#718EBF] font-medium text-sm text-center whitespace-nowrap">Repay</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loansData.map((loan, index) => (
              <TableRow 
                key={index} 
                className="border-b border-gray-50 last:border-none hover:bg-gray-50/50 transition-colors"
              >
                <TableCell className="py-4 px-6 text-[#232323] text-sm">{loan.id}</TableCell>
                <TableCell className="py-4 px-6 text-[#232323] text-sm font-medium">{loan.amount}</TableCell>
                <TableCell className="py-4 px-6 text-[#232323] text-sm">{loan.left}</TableCell>
                <TableCell className="py-4 px-6 text-[#232323] text-sm">{loan.duration}</TableCell>
                <TableCell className="py-4 px-6 text-[#232323] text-sm">{loan.rate}</TableCell>
                <TableCell className="py-4 px-6 text-[#232323] text-sm">{loan.installment}</TableCell>
                <TableCell className="py-4 px-6 text-center">
                  <Button 
                    variant="outline" 
                    className="px-6 h-8 rounded-full border-[#1814F3] text-[#1814F3] text-xs font-semibold hover:bg-[#1814F3] hover:text-white transition-all active:scale-95"
                  >
                    Repay
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="bg-gray-50/20 hover:bg-gray-50/20">
            <TableRow>
              <TableCell className="py-4 px-6 text-[#FF4B4A] font-bold text-sm">Total</TableCell>
              <TableCell className="py-4 px-6 text-[#FF4B4A] font-bold text-sm">$125,0000</TableCell>
              <TableCell className="py-4 px-6 text-[#FF4B4A] font-bold text-sm">$750,000</TableCell>
              <TableCell className="py-4 px-6"></TableCell>
              <TableCell className="py-4 px-6"></TableCell>
              <TableCell className="py-4 px-6 text-[#FF4B4A] font-bold text-sm">$50,000 / month</TableCell>
              <TableCell className="py-4 px-6"></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}