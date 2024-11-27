"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import React from "react";

const HomePage = () => {
  return (
    <div className="h-full bg-[#1e1f21] text-white p-8">
      {/* Header Section */}
      <header className="mb-8">
        <div className="text-center mt-2 mb-6">
          <h1 className="text-lg font-light text-gray-400">
            {new Date().toLocaleDateString(undefined, {
              day: "numeric",
              weekday: "long",
              month: "long",
            })}
          </h1>
          <h2 className="text-2xl font-semibold">Good morning, Mohit</h2>
        </div>

        <div className="mt-4 flex items-center justify-center gap-10 bg-[#2e2e30] p-1 border border-black rounded-full">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className="text-gray-400 hover:text-gray-300"
                  style={{ textDecoration: "none" }}
                >
                  My week <span className="ml-1">▾</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 text-white">
                <DropdownMenuItem>My week</DropdownMenuItem>
                <DropdownMenuItem>Tasks</DropdownMenuItem>
                <DropdownMenuItem>Collaborators</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="h-6 border-l border-gray-600"></div>
          <span className="text-gray-400">0 tasks completed</span>
          <div className="h-6 border-l border-gray-600"></div>
          <span className="text-gray-400">0 collaborators</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* My Tasks */}
        <div className="bg-[#2e2e30] p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">My tasks</h3>
          <div className="space-y-2">
            <Button
              variant="link"
              className="text-gray-400 hover:text-gray-300"
              style={{ textDecoration: "none" }}
            >
              Upcoming
            </Button>
            <Button
              variant="link"
              className="text-gray-400 hover:text-gray-300"
              style={{ textDecoration: "none" }}
            >
              Overdue (2)
            </Button>
            <Button
              variant="link"
              className="text-gray-400 hover:text-gray-300"
              style={{ textDecoration: "none" }}
            >
              Completed
            </Button>
          </div>
          <Button
            variant="ghost"
            className="mt-4 bg-[#1e1f21] text-white hover:bg-[#fafafa] hover:text-black"
          >
            + Create task
          </Button>
        </div>

        {/* Projects */}
        <div className="bg-[#2e2e30] p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Projects</h3>
          <div className="space-y-4">
            <Button
              variant="ghost"
              className="flex items-center space-x-2 bg-[#1e1f21] text-white hover:bg-[#fafafa] hover:text-black"
            >
              <span>Create project</span>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#1e1f21] flex items-center justify-center rounded">
                📄
              </div>
              <span>Cross Functional Project Plan ›</span>
            </div>
          </div>
        </div>

        {/* People */}
        <div className="bg-[#2e2e30] p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">People</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Avatar className="bg-gray-700">
                <AvatarImage src="/avatar.png" alt="User" />
                <AvatarFallback className="text-black">AB</AvatarFallback>
              </Avatar>
              <div className="w-20 h-6 bg-[#3d3f41] rounded"></div>
            </div>
            <div className="flex items-center space-x-2">
              <Avatar className="bg-gray-700">
                <AvatarImage src="/avatar.png" alt="User" />
                <AvatarFallback className="text-black">CD</AvatarFallback>
              </Avatar>
              <div className="w-16 h-6 bg-[#3d3f41] rounded"></div>
            </div>
            <div className="flex items-center space-x-2">
              <Avatar className="bg-gray-700">
                <AvatarImage src="/avatar.png" alt="User" />
                <AvatarFallback className="text-black">EF</AvatarFallback>
              </Avatar>
              <div className="w-16 h-6 bg-[#3d3f41] rounded"></div>
            </div>
            <div className="flex items-center space-x-2">
              <Avatar className="bg-gray-700">
                <AvatarImage src="/avatar.png" alt="User" />
                <AvatarFallback className="text-black">GH</AvatarFallback>
              </Avatar>
              <div className="w-24 h-6 bg-[#3d3f41] rounded"></div>
            </div>
          </div>
          <Button
            variant="ghost"
            className="mt-4 bg-[#1e1f21] text-white hover:bg-[#fafafa] hover:text-black"
          >
            Invite teammates
          </Button>
        </div>

        {/* Widgets */}
        <div className="bg-[#2e2e30] p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-3">
          <h3 className="text-lg font-semibold mb-4">
            Drag and drop new widgets
          </h3>
          <Button
            variant="secondary"
            className="bg-[#1e1f21] text-white hover:bg-[#fafafa] hover:text-black"
          >
            Customize
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
