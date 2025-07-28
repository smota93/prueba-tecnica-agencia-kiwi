import { BellIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/solid';

import SideNav from '@/app/ui/dashboard/sidenav';
import Search from '@/app/ui/search';
import Avatar from '@/app/ui/avatar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 bg-slate-50 md:overflow-y-auto md:p-12">
        {/* Top Bar */}
        <div className="flex justify-end">
          <div className="flex justify-start w-96 bg-white p-2 rounded-3xl">
            {/* Search */}
            <div className="w-56">
              <Search placeholder='Search' />
            </div>

            {/* Icons */}
            <BellIcon className="m-2 h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900 cursor-pointer" />
            <MoonIcon className="m-2 h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900 cursor-pointer" />
            <InformationCircleIcon className="m-2 h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900 cursor-pointer" />

            {/* Avatar */}
            <Avatar />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}