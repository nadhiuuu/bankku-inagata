"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const currencies = [
  "USD - US Dollar", "EUR - Euro", "GBP - British Pound", "JPY - Japanese Yen",
  "AUD - Australian Dollar", "CAD - Canadian Dollar", "CHF - Swiss Franc",
  "CNY - Chinese Yuan", "HKD - Hong Kong Dollar", "NZD - New Zealand Dollar",
  "SEK - Swedish Krona", "KRW - South Korean Won", "SGD - Singapore Dollar",
  "NOK - Norwegian Krone", "MXN - Mexican Peso", "INR - Indian Rupee",
  "RUB - Russian Ruble", "ZAR - South African Rand", "TRY - Turkish Lira",
  "BRL - Brazilian Real", "TWD - New Taiwan Dollar", "DKK - Danish Krone",
  "PLN - Polish Zloty", "THB - Thai Baht", "IDR - Indonesian Rupiah",
  "HUF - Hungarian Forint", "CZK - Czech Koruna", "ILS - Israeli New Shekel",
  "CLP - Chilean Peso", "PHP - Philippine Peso", "AED - UAE Dirham",
  "COP - Colombian Peso", "SAR - Saudi Riyal", "MYR - Malaysian Ringgit"
];

const timezones = Intl.supportedValuesOf("timeZone");

export default function PreferencesTab() {
  const [preferences, setPreferences] = useState({
    currency: "USD - US Dollar",
    timezone: "Asia/Jakarta",
  });

  const [notifications, setNotifications] = useState({
    digitalCurrency: true,
    merchantOrder: false,
    recommendations: true,
  });

  const handleToggle = (key: keyof typeof notifications, checked: boolean) => {
    setNotifications((prev) => ({ ...prev, [key]: checked }));
  };

  const handlePreferenceChange = (key: keyof typeof preferences, value: string) => {
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  const sharedClasses = 
    "w-full rounded-[15px] border-[#DFEAF2] bg-white text-[#718EBF] shadow-none focus-visible:ring-2 focus-visible:ring-[#1814F3] focus-visible:ring-offset-0";

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
        <div className="space-y-2.5">
          <label className="text-[15px] md:text-base text-[#232323] font-normal">Currency</label>
          <Select 
            value={preferences.currency} 
            onValueChange={(val) => handlePreferenceChange("currency", val)}
          >
            <SelectTrigger className={cn(sharedClasses, "hover:bg-white")}>
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent className="rounded-[15px] border-[#DFEAF2] max-h-[250px]">
              {currencies.map((currency) => (
                <SelectItem key={currency} value={currency}>
                  {currency}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2.5">
          <label className="text-[15px] md:text-base text-[#232323] font-normal">Time Zone</label>
          <Select 
            value={preferences.timezone} 
            onValueChange={(val) => handlePreferenceChange("timezone", val)}
          >
            <SelectTrigger className={cn(sharedClasses, "hover:bg-white text-left")}>
              <SelectValue placeholder="Select time zone" className="truncate" />
            </SelectTrigger>
            <SelectContent className="rounded-[15px] border-[#DFEAF2] max-h-[250px]">
              {timezones.map((tz) => (
                <SelectItem key={tz} value={tz}>
                  {tz.replace(/_/g, " ")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-5">
        <h3 className="text-base md:text-lg font-medium text-[#333B69]">Notification</h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Switch
              checked={notifications.digitalCurrency}
              onCheckedChange={(checked) => handleToggle("digitalCurrency", checked)}
              className="data-[state=checked]:bg-[#16DBCC] data-[state=unchecked]:bg-[#E8EEF3]"
            />
            <span className="text-sm md:text-base text-[#718EBF]">I send or receive digital currency</span>
          </div>

          <div className="flex items-center gap-4">
            <Switch
              checked={notifications.merchantOrder}
              onCheckedChange={(checked) => handleToggle("merchantOrder", checked)}
              className="data-[state=checked]:bg-[#16DBCC] data-[state=unchecked]:bg-[#E8EEF3]"
            />
            <span className="text-sm md:text-base text-[#718EBF]">I receive merchant order</span>
          </div>

          <div className="flex items-center gap-4">
            <Switch
              checked={notifications.recommendations}
              onCheckedChange={(checked) => handleToggle("recommendations", checked)}
              className="data-[state=checked]:bg-[#16DBCC] data-[state=unchecked]:bg-[#E8EEF3]"
            />
            <span className="text-sm md:text-base text-[#718EBF]">There are recommendation for my account</span>
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