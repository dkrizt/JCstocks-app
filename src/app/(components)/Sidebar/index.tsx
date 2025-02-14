'Use Client';

import React from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="">
      {/* TOP LOGO */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8`}
      >
        <Image
          src="/Chris-Icon.jpeg"
          alt="edstock-logo"
          width={27}
          height={27}
          className="rounded w-8"
        />
        <h1
        /*         className={`${
          isSidebarCollapsed ? "hidden" : "block"
        } font-extrabold text-2xl`} */
        >
          EDSTOCK
        </h1>

        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          /* onClick={toggleSidebar} */
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      {/* LINKS */}
      <div className="flex-grow mt-8"></div>

      {/* FOOTER */}
      <div /* className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`} */>
        <p className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} JCstocks
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
