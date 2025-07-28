"use client"

import { BellIcon, InformationCircleIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

import SideNav from '@/app/ui/dashboard/sidenav';
import Search from '@/app/ui/search';
import Avatar from '@/app/ui/avatar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickOutside = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.hamburger-menu') && !target.closest('.mobile-menu')) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden" onClick={handleClickOutside}>
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 bg-slate-50 md:overflow-y-auto md:p-12">
        {/* Top Bar */}
        <div className="flex justify-end">
          <div className="flex justify-start w-full md:w-96 bg-white p-2 rounded-3xl">
            {/* Search */}
            <div className="w-full md:w-56">
              <Search placeholder='Search' />
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hamburger-menu md:hidden m-2 p-1 rounded-md hover:bg-gray-100 cursor-pointer"
            >
              <Bars3Icon className="h-5 w-5 text-gray-500" />
            </button>

            {/* Icons */}
            <div className="hidden md:flex">
              <BellIcon className="m-2 h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900 cursor-pointer" />
              <MoonIcon className="m-2 h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900 cursor-pointer" />
              <InformationCircleIcon className="m-2 h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900 cursor-pointer" />
            </div>

            {/* Avatar */}
            <div className="hidden md:block">
              <Avatar />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu md:hidden absolute top-20 right-6 bg-white rounded-lg shadow-lg border p-4 z-50">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                <BellIcon className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-700 cursor-pointer">Notifications</span>
              </div>
              <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                <MoonIcon className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-700 cursor-pointer">Dark Mode</span>
              </div>
              <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                <InformationCircleIcon className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-700 cursor-pointer">Help</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex items-center space-x-3 p-2">
                  <Avatar />
                  <span className="text-sm text-gray-700 cursor-pointer">Profile</span>
                </div>
              </div>
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  )
}