"use client";

import React, { useEffect, useState } from "react";
import slideifyLogo from "../public/slideify-logo.png";
import slideifyIcon from "../public/slideify-icon.png";
import Image from "next/image";
import { CaretLineRight } from "@phosphor-icons/react";
import Link from "next/link";

//Implement is selected auth context and proper sidebar navigation, main nav on mo

// Mock data for navigation items
const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: <CaretLineRight /> },
  { name: "Dashboard", href: "/dashboard", icon: <CaretLineRight /> },
  { name: "Dashboard", href: "/dashboard", icon: <CaretLineRight /> },
  { name: "Dashboard", href: "/dashboard", icon: <CaretLineRight /> },
  { name: "Dashboard", href: "/dashboard", icon: <CaretLineRight /> },
  { name: "Dashboard", href: "/dashboard", icon: <CaretLineRight /> },
  { name: "Dashboard", href: "/dashboard", icon: <CaretLineRight /> },
  { name: "Dashboard", href: "/dashboard", icon: <CaretLineRight /> },
  { name: "Dashboard", href: "/dashboard", icon: <CaretLineRight /> },
  { name: "Dashboard", href: "/dashboard", icon: <CaretLineRight /> },
  { name: "Dashboard", href: "/dashboard", icon: <CaretLineRight /> },
  { name: "Dashboard", href: "/dashboard", icon: <CaretLineRight /> },
  { name: "Dashboard", href: "/dashboard", icon: <CaretLineRight /> },
  { name: "Dashboard", href: "/dashboard", icon: <CaretLineRight /> },
  { name: "Dashboard", href: "/dashboard", icon: <CaretLineRight /> },
  { name: "Dashboard", href: "/dashboard", icon: <CaretLineRight /> },
  { name: "Dashboard", href: "/dashboard", icon: <CaretLineRight /> },
  { name: "Projects", href: "/projects", icon: <CaretLineRight /> },
];

const navsFooter = [
  { name: "Settings", href: "/settings", icon: <CaretLineRight /> },
  { name: "Logout", href: "/logout", icon: <CaretLineRight /> },
];

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface RenderNavListProps {
  items: NavItem[];
  isCollapsed: boolean;
}

const RenderNavList: React.FC<RenderNavListProps> = ({
  items,
  isCollapsed,
}) => (
  <ul className="px-4 text-sm font-medium space-y-2 mt-2">
    {items.map((item, idx) => (
      <li key={idx}>
        <a
          href={item.href}
          className={`flex items-center text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150 ${
            isCollapsed ? "w-full justify-center" : "gap-x-2"
          }`}
        >
          <div className="text-gray-500">{item.icon}</div>
          {!isCollapsed && (
            <span className="transition-opacity duration-300 opacity-100 w-auto">
              {item.name}
            </span>
          )}
        </a>
      </li>
    ))}
  </ul>
);

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state based on window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav
      className={`relative border-r bg-white transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-56"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header Section */}
        <div className="h-16 flex items-center justify-center px-4 border-b py-4">
          <Link
            href="/"
            className="flex items-center justify-center w-full transition-all duration-300"
          >
            <Image
              src={isCollapsed ? slideifyIcon : slideifyLogo}
              width={isCollapsed ? 35 : 120}
              alt="Slideify Logo"
            />
          </Link>
          {/* Toggle Button */}
          <button
            onClick={toggleSidebar}
            className={`absolute top-2/3 transition-all duration-300 ${
              isCollapsed ? "left-16" : "left-52"
            } p-1 `}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <div
              className={`p-1 rounded bg-gray-100 hover:bg-gray-200 transition-all duration-300 transform ${
                isCollapsed ? "rotate-0" : "rotate-180"
              }`}
            >
              <CaretLineRight
                weight="bold"
                size={18}
                color="rgb(107 114 128)"
              />
            </div>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col h-full justify-between  overflow-x-hidden overflow-y-auto">
          <RenderNavList items={navigation} isCollapsed={isCollapsed} />

          {/* Footer Navigation */}
          <RenderNavList items={navsFooter} isCollapsed={isCollapsed} />
        </div>

        {/* User Profile */}
        <div className="py-4 px-4 border-t">
          <div className="flex items-center gap-x-4 my-1 h-full">
            <Image
              src={slideifyIcon}
              alt="User"
              className="w-12 h-12 rounded-full border border-blue-600 bg-white p-1"
              width={100}
              height={100}
            />
            {!isCollapsed && (
              <div className="opacity-100 w-auto">
                <span className="block text-gray-700 text-sm font-semibold">
                  Omar Mohamed
                </span>
                <a
                  href="javascript:void(0)"
                  className="block mt-px text-gray-600 hover:text-blue-600 text-xs"
                >
                  View profile
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
