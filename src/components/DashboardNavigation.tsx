import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  FileText,
  Calculator,
  Settings,
  LogOut,
  ChevronRight,
  Users,
  Key,
  BarChart
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface NavItem {
  icon: any;
  label: string;
  path: string;
  role?: string[];
}

const DashboardNavigation = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user } = useAuthStore();

  const navItems: NavItem[] = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: 'Reports', path: '/reports' },
    { icon: Calculator, label: 'Calculate', path: '/calculate' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    // Admin only items
    { icon: Users, label: 'Users', path: '/admin/users', role: ['admin'] },
    { icon: BarChart, label: 'Analytics', path: '/admin/analytics', role: ['admin'] },
    // Installer only items
    { icon: Users, label: 'Leads', path: '/installer/leads', role: ['installer'] },
    { icon: Key, label: 'API Keys', path: '/installer/api', role: ['installer'] },
  ];

  const filteredNavItems = navItems.filter(item => 
    !item.role || (user?.role && item.role.includes(user.role))
  );

  return (
    <motion.nav
      initial={false}
      animate={{ width: isCollapsed ? 80 : 280 }}
      className="fixed left-0 top-0 h-screen bg-white border-r border-gray-200 z-40"
    >
      <div className="p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/logo.svg" alt="SolarIntelli" className="h-8 w-8" />
          {!isCollapsed && <span className="font-bold text-xl">SolarIntelli</span>}
        </Link>
      </div>

      <div className="mt-8 px-2">
        {filteredNavItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-3 py-2 my-1 rounded-lg transition-colors ${
              location.pathname === item.path
                ? 'bg-green-50 text-green-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="h-5 w-5" />
            {!isCollapsed && <span className="ml-3">{item.label}</span>}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-8 w-8 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
      >
        <ChevronRight
          className={`h-4 w-4 text-gray-400 transition-transform ${
            isCollapsed ? '' : 'rotate-180'
          }`}
        />
      </button>
    </motion.nav>
  );
};

export default DashboardNavigation;