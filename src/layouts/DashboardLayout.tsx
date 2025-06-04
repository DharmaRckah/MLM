import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { HomeIcon, UsersIcon, DollarSignIcon, UserIcon, ShoppingBagIcon, ShoppingCartIcon, BriefcaseIcon, BookOpenIcon, BellIcon, LifeBuoyIcon, LinkIcon, BarChartIcon, SettingsIcon, WalletIcon, LogOutIcon, MenuIcon, XIcon, ChevronDownIcon, BoxIcon } from 'lucide-react';
interface DashboardLayoutProps {
  onLogout: () => void;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  onLogout
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    onLogout();
    navigate('/');
  };
  const navigation = [{
    name: 'Dashboard',
    href: '/dashboard',
    icon: HomeIcon
  }, {
    name: 'My Network',
    href: '/dashboard/network',
    icon: UsersIcon
  }, {
    name: 'Earnings',
    href: '/dashboard/earnings',
    icon: DollarSignIcon
  }, {
    name: 'Team Performance',
    href: '/dashboard/team',
    icon: BoxIcon
  }, {
    name: 'Products',
    href: '/dashboard/products',
    icon: ShoppingBagIcon
  }, {
    name: 'My Orders',
    href: '/dashboard/orders',
    icon: ShoppingCartIcon
  }, {
    name: 'Wallet',
    href: '/dashboard/wallet',
    icon: WalletIcon
  }, {
    name: 'Marketing Tools',
    href: '/dashboard/marketing',
    icon: BriefcaseIcon
  }, {
    name: 'Training',
    href: '/dashboard/training',
    icon: BookOpenIcon
  }, {
    name: 'Announcements',
    href: '/dashboard/announcements',
    icon: BellIcon
  }, {
    name: 'Support',
    href: '/dashboard/support',
    icon: LifeBuoyIcon
  }, {
    name: 'Referrals',
    href: '/dashboard/referrals',
    icon: LinkIcon
  }, {
    name: 'Reports',
    href: '/dashboard/reports',
    icon: BarChartIcon
  }, {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: SettingsIcon
  }, {
    name: 'Profile',
    href: '/dashboard/profile',
    icon: UserIcon
  }];
  return <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 flex z-40 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-purple-700">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={() => setSidebarOpen(false)}>
              <span className="sr-only">Close sidebar</span>
              <XIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-shrink-0 flex items-center px-4">
            <div className="h-8 w-8 bg-white rounded-full"></div>
            <span className="ml-2 text-xl font-bold text-white">MLM Pro</span>
          </div>
          <div className="mt-5 flex-1 h-0 overflow-y-auto">
            <nav className="px-2 space-y-1">
              {navigation.map(item => <NavLink key={item.name} to={item.href} className={({
              isActive
            }) => `group flex items-center px-2 py-2 text-base font-medium rounded-md ${isActive ? 'bg-purple-800 text-white' : 'text-white hover:bg-purple-600'}`}>
                  <item.icon className="mr-4 h-6 w-6 flex-shrink-0" />
                  {item.name}
                </NavLink>)}
            </nav>
          </div>
        </div>
      </div>
      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-purple-700">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <div className="h-8 w-8 bg-white rounded-full"></div>
              <span className="ml-2 text-xl font-bold text-white">MLM Pro</span>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map(item => <NavLink key={item.name} to={item.href} className={({
              isActive
            }) => `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${isActive ? 'bg-purple-800 text-white' : 'text-white hover:bg-purple-600'}`}>
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                </NavLink>)}
            </nav>
          </div>
        </div>
      </div>
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
          <button className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="border-b border-gray-200 pb-6 flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Dashboard
                </h1>
                <div className="flex items-center">
                  {/* Notifications dropdown */}
                  <div className="ml-4 relative">
                    <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" onClick={() => setNotificationsOpen(!notificationsOpen)}>
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" />
                    </button>
                    {/* Red dot for notifications */}
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                    {notificationsOpen && <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-4 py-2 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-900">
                            Notifications
                          </p>
                        </div>
                        <div className="py-1">
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <p className="font-medium">
                              New team member joined
                            </p>
                            <p className="text-xs text-gray-500">
                              2 minutes ago
                            </p>
                          </a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <p className="font-medium">
                              Commission payment received
                            </p>
                            <p className="text-xs text-gray-500">1 hour ago</p>
                          </a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <p className="font-medium">
                              New training available
                            </p>
                            <p className="text-xs text-gray-500">3 hours ago</p>
                          </a>
                        </div>
                        <div className="py-1 border-t border-gray-100">
                          <a href="#" className="block px-4 py-2 text-sm text-purple-600 hover:bg-gray-100">
                            View all notifications
                          </a>
                        </div>
                      </div>}
                  </div>
                  {/* Profile dropdown */}
                  <div className="ml-4 relative">
                    <div>
                      <button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}>
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        <ChevronDownIcon className="ml-1 h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                    {profileDropdownOpen && <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <NavLink to="/dashboard/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setProfileDropdownOpen(false)}>
                          Your Profile
                        </NavLink>
                        <NavLink to="/dashboard/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setProfileDropdownOpen(false)}>
                          Settings
                        </NavLink>
                        <button className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLogout}>
                          Sign out
                        </button>
                      </div>}
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">
                <Outlet />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>;
};
export default DashboardLayout;