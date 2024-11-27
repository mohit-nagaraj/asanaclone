"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "../themeprovider";
import { PlusCircle } from "lucide-react";

const HomePage = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`h-full ${theme === "light" ? "bg-white text-gray-900" : "bg-[#1e1f21] text-white"} p-8`}
    >
      {/* Header Section */}
      <header className="mb-8">
        <div className="text-center mt-2 mb-6">
          <h1
            className={`text-lg font-light ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}
          >
            {new Date().toLocaleDateString(undefined, {
              day: "numeric",
              weekday: "long",
              month: "long",
            })}
          </h1>
          <h2 className="text-2xl font-semibold">Good morning, Springreen</h2>
        </div>

        <div
          className={`mt-4 flex items-center justify-center gap-10 ${theme === "light" ? "bg-gray-100" : "bg-[#2e2e30]"} p-1 border ${theme === "light" ? "border-gray-200" : "border-black"} rounded-full`}
        >
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className={`${theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-gray-300"}`}
                >
                  My week <span className="ml-1">▾</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>My week</DropdownMenuItem>
                <DropdownMenuItem>Tasks</DropdownMenuItem>
                <DropdownMenuItem>Collaborators</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div
            className={`h-6 border-l ${theme === "light" ? "border-gray-300" : "border-gray-600"}`}
          ></div>
          <span
            className={theme === "light" ? "text-gray-600" : "text-gray-400"}
          >
            0 tasks completed
          </span>
          <div
            className={`h-6 border-l ${theme === "light" ? "border-gray-300" : "border-gray-600"}`}
          ></div>
          <span
            className={theme === "light" ? "text-gray-600" : "text-gray-400"}
          >
            0 collaborators
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* My Tasks */}
        <div
          className={`${theme === "light" ? "bg-white" : "bg-[#2e2e30]"} p-6 rounded-lg shadow-md`}
        >
          <h3 className="text-lg font-semibold mb-4">My tasks</h3>
          <div className="space-y-2">
            <Button
              variant="link"
              className={`${theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-gray-300"}`}
            >
              Upcoming
            </Button>
            <Button
              variant="link"
              className={`${theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-gray-300"}`}
            >
              Overdue (2)
            </Button>
            <Button
              variant="link"
              className={`${theme === "light" ? "text-gray-600 hover:text-gray-900" : "text-gray-400 hover:text-gray-300"}`}
            >
              Completed
            </Button>
          </div>
          <Button variant="outline" className="mt-4">
            <PlusCircle className="mr-2 h-4 w-4" /> Create task
          </Button>
        </div>

        {/* Projects */}
        <div
          className={`${theme === "light" ? "bg-white" : "bg-[#2e2e30]"} p-6 rounded-lg shadow-md`}
        >
          <h3 className="text-lg font-semibold mb-4">Projects</h3>
          <div className="space-y-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <PlusCircle className="mr-2 h-4 w-4" /> Create project
            </Button>
            <div className="flex items-center space-x-2">
              <div
                className={`w-10 h-10 ${theme === "light" ? "bg-gray-100" : "bg-[#1e1f21]"} flex items-center justify-center rounded`}
              >
                📄
              </div>
              <span>Cross Functional Project Plan ›</span>
            </div>
          </div>
        </div>

        {/* People */}
        <div
          className={`${theme === "light" ? "bg-white" : "bg-[#2e2e30]"} p-6 rounded-lg shadow-md`}
        >
          <h3 className="text-lg font-semibold mb-4">People</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <div
                className={`w-20 h-6 ${theme === "light" ? "bg-gray-100" : "bg-[#3d3f41]"} rounded`}
              ></div>
            </div>
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>CD</AvatarFallback>
              </Avatar>
              <div
                className={`w-16 h-6 ${theme === "light" ? "bg-gray-100" : "bg-[#3d3f41]"} rounded`}
              ></div>
            </div>
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>EF</AvatarFallback>
              </Avatar>
              <div
                className={`w-16 h-6 ${theme === "light" ? "bg-gray-100" : "bg-[#3d3f41]"} rounded`}
              ></div>
            </div>
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback>GH</AvatarFallback>
              </Avatar>
              <div
                className={`w-24 h-6 ${theme === "light" ? "bg-gray-100" : "bg-[#3d3f41]"} rounded`}
              ></div>
            </div>
          </div>
          <Button variant="outline" className="mt-4">
            Invite teammates
          </Button>
        </div>

        {/* Widgets */}
        <div
          className={`${theme === "light" ? "bg-white" : "bg-[#2e2e30]"} p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-3`}
        >
          <h3 className="text-lg font-semibold mb-4">
            Drag and drop new widgets
          </h3>
          <Button variant="secondary">Customize</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
