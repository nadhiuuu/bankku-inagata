"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SecurityTab() {
  const [twoFactor, setTwoFactor] = useState(true);

  const sharedClasses = 
    "w-full rounded-[15px] border-[#DFEAF2] bg-white text-[#718EBF] shadow-none focus-visible:ring-2 focus-visible:ring-[#1814F3] focus-visible:ring-offset-0";

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-500">
      <div className="space-y-4">
        <h3 className="text-base md:text-lg font-medium text-[#333B69]">
          Two-factor Authentication
        </h3>
        <div className="flex items-center gap-4">
          <Switch
            checked={twoFactor}
            onCheckedChange={setTwoFactor}
            className="data-[state=checked]:bg-[#16DBCC] data-[state=unchecked]:bg-[#E8EEF3]"
          />
          <span className="text-sm md:text-base text-[#718EBF]">
            Enable or disable two factor authentication
          </span>
        </div>
      </div>

      <div className="space-y-5">
        <h3 className="text-base md:text-lg font-medium text-[#333B69]">
          Change Password
        </h3>
        
        <div className="max-w-xl space-y-5">
          <div className="space-y-2.5">
            <label className="text-[15px] md:text-base text-[#232323] font-normal">
              Current Password
            </label>
            <Input
              type="password"
              placeholder="**********"
              className={sharedClasses}
            />
          </div>

          <div className="space-y-2.5">
            <label className="text-[15px] md:text-base text-[#232323] font-normal">
              New Password
            </label>
            <Input
              type="password"
              placeholder="**********"
              className={sharedClasses}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button className="w-full md:w-[180px] bg-[#1814F3] hover:bg-blue-700 text-white rounded-[15px] font-semibold transition-all shadow-lg shadow-blue-200">
          Save
        </Button>
      </div>
    </div>
  );
}