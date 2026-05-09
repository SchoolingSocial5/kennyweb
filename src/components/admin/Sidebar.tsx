'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HiChartPie, 
  HiUser, 
  HiUsers, 
  HiCollection, 
  HiCheckCircle, 
  HiDocumentText, 
  HiCog 
} from 'react-icons/hi';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: HiChartPie },
    { name: 'Profile', href: '/admin/profile', icon: HiUser },
    { name: 'Customers', href: '/admin/customers', icon: HiUsers },
    { name: 'Projects', href: '/admin/projects', icon: HiCollection },
    { name: 'Active Projects', href: '/admin/active-projects', icon: HiCheckCircle },
    { name: 'Pages', href: '/admin/pages', icon: HiDocumentText },
    { name: 'Settings', href: '/admin/settings', icon: HiCog },
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-200 h-screen sticky top-0 hidden lg:flex flex-col">
      <div className="p-8 border-b border-slate-100 mb-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform rotate-12">
            <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
          </div>
          <span className="text-xl font-black tracking-tighter">IT Company<span className="text-primary">.</span></span>
        </Link>
      </div>
      
      <div className="px-4 py-4 space-y-8 flex-1 overflow-y-auto">
        <div className="space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-4">Menu</p>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className={`
                    flex items-center gap-4 px-4 py-3 rounded-xl font-semibold transition-all group
                    ${isActive 
                      ? 'bg-primary text-white shadow-md shadow-primary/20' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-primary'}
                  `}
                >
                  <Icon className={`text-xl ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-primary'}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
