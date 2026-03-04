"use client";

import React, { useState } from "react";
import EditProfilePage from "@/components/page/settings/edit-profile"; 
import PreferencesPage from "@/components/page/settings/preferences";
import SecurityPage from "@/components/page/settings/security";

type TabType = "edit-profile" | "preferences" | "security";

export default function SettingsTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("edit-profile");

  const tabs = [
    { id: "edit-profile", label: "Edit Profile" },
    { id: "preferences", label: "Preferences" },
    { id: "security", label: "Security" },
  ];

  return (
    <div className="bg-white rounded-[25px] p-6 shadow-sm border border-gray-50 min-h-[600px]">
      <div className="flex items-center gap-8 md:gap-16 border-b border-gray-100 mb-8 px-2 md:px-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`pb-3 text-sm md:text-base font-medium transition-all relative whitespace-nowrap
              ${activeTab === tab.id 
                ? "text-[#1814F3]" 
                : "text-[#718EBF] hover:text-[#1814F3]/70"}`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1814F3] rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      <div className="px-2 md:px-6">
        {activeTab === "edit-profile" && <EditProfilePage />}
        {activeTab === "preferences" && <PreferencesPage />}
        {activeTab === "security" && <SecurityPage />}
      </div>
    </div>
  );
}