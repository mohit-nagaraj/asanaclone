"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "../themeprovider";
import { Mail, Search, Filter, RefreshCw } from "lucide-react";

const InboxPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${theme === "light" ? "bg-white text-gray-900" : "bg-[#1e1f21] text-white"} p-8`}
    >
      <header className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Inbox</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Mail className="mr-2 h-4 w-4" />
              Compose
            </Button>
            <Input
              type="text"
              placeholder="Search messages"
              className={`w-64 ${theme === "light" ? "bg-gray-100" : "bg-[#2e2e30]"}`}
            />
          </div>
        </div>

        <div
          className={`flex items-center justify-between ${theme === "light" ? "bg-gray-100" : "bg-[#2e2e30]"} p-2 rounded-lg`}
        >
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button variant="ghost" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
          <span
            className={theme === "light" ? "text-gray-600" : "text-gray-400"}
          >
            0 messages
          </span>
        </div>
      </header>

      <div
        className={`text-center py-12 ${theme === "light" ? "bg-gray-50" : "bg-[#2e2e30]"} rounded-lg`}
      >
        <Mail
          className={`mx-auto h-12 w-12 ${theme === "light" ? "text-gray-400" : "text-gray-600"}`}
        />
        <h2 className="mt-2 text-lg font-medium">Your inbox is empty</h2>
        <p
          className={`mt-1 ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}
        >
          You have no new messages.
        </p>
        <Button className="mt-6" variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>

      <div className="mt-8 flex justify-end">
        <Button variant="default">Check for New Messages</Button>
      </div>
    </div>
  );
};

export default InboxPage;
