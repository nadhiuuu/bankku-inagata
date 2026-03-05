"use client";

import React, { useState } from "react";
import { Pencil, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function EditProfileTab() {
  const [formData, setFormData] = useState({
    name: "Charlene Reed",
    username: "Charlene Reed",
    email: "charlenereed@gmail.com",
    password: "password123",
    dob: new Date(1990, 0, 25),
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, country: value }));
  };

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setFormData((prev) => ({ ...prev, dob: date }));
    }
  };

  const sharedClasses = 
    "w-full rounded-[15px] border-[#DFEAF2] bg-white text-[#718EBF] shadow-none focus-visible:ring-2 focus-visible:ring-[#1814F3] focus-visible:ring-offset-0";

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-start animate-in fade-in duration-500">
      <div className="relative mx-auto lg:mx-0 shrink-0 mt-2">
        <div className="w-24 h-24 md:w-[130px] md:h-[130px] rounded-full overflow-hidden border border-gray-100">
          <img
            src="https://i.pravatar.cc/150?u=charlene "
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <button className="absolute bottom-1 right-1 bg-[#1814F3] text-white p-2 md:p-2.5 rounded-full border-[3px] border-white hover:scale-110 transition-transform shadow-sm">
          <Pencil size={18} fill="white" className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>

      <div className="flex-1 w-full space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
          {[
            { label: "Your Name", name: "name", type: "text" },
            { label: "User Name", name: "username", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Password", name: "password", type: "password" },
          ].map((field) => (
            <div key={field.name} className="space-y-2.5">
              <label className="text-[15px] md:text-base text-[#232323] font-normal">{field.label}</label>
              <Input
                name={field.name}
                type={field.type}
                value={formData[field.name as keyof typeof formData] as string}
                onChange={handleChange}
                className={sharedClasses}
              />
            </div>
          ))}

          <div className="space-y-2.5">
            <label className="text-[15px] md:text-base text-[#232323] font-normal">Date of Birth</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    sharedClasses,
                    "justify-between text-left font-normal hover:bg-white hover:text-[#718EBF]",
                    !formData.dob && "text-muted-foreground"
                  )}
                >
                  {formData.dob ? format(formData.dob, "d MMMM yyyy") : <span>Pick a date</span>}
                  <ChevronDown className="h-4 w-4 opacity-50 text-[#718EBF]" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 rounded-[15px] border-[#DFEAF2]" align="start">
                <Calendar
                  mode="single"
                  selected={formData.dob}
                  onSelect={handleDateChange}
                  initialFocus
                  className="rounded-[15px]"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2.5">
            <label className="text-[15px] md:text-base text-[#232323] font-normal">Present Address</label>
            <Input 
              name="presentAddress" 
              type="text" 
              value={formData.presentAddress} 
              onChange={handleChange} 
              className={sharedClasses} 
            />
          </div>

          <div className="space-y-2.5">
            <label className="text-[15px] md:text-base text-[#232323] font-normal">Permanent Address</label>
            <Input 
              name="permanentAddress" 
              type="text" 
              value={formData.permanentAddress} 
              onChange={handleChange} 
              className={sharedClasses} 
            />
          </div>

          <div className="space-y-2.5">
            <label className="text-[15px] md:text-base text-[#232323] font-normal">City</label>
            <Input 
              name="city" 
              type="text" 
              value={formData.city} 
              onChange={handleChange} 
              className={sharedClasses} 
            />
          </div>

          <div className="space-y-2.5">
            <label className="text-[15px] md:text-base text-[#232323] font-normal">Postal Code</label>
            <Input 
              name="postalCode" 
              type="text" 
              value={formData.postalCode} 
              onChange={handleChange} 
              className={sharedClasses} 
            />
          </div>

          <div className="space-y-2.5">
            <label className="text-[15px] md:text-base text-[#232323] font-normal">Country</label>
            <Select value={formData.country} onValueChange={handleSelectChange}>
              <SelectTrigger className={cn(sharedClasses, "hover:bg-white")}>
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent className="rounded-[15px] border-[#DFEAF2]">
                <SelectItem value="USA">USA</SelectItem>
                <SelectItem value="Indonesia">Indonesia</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end pt-5">
          <Button 
            className="w-full md:w-[180px] bg-[#1814F3] hover:bg-blue-700 text-white rounded-[15px] font-semibold transition-all shadow-lg shadow-blue-200"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}