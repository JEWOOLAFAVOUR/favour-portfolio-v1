import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

const AdminLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <AdminSidebar
                isMobileOpen={isOpen} setIsMobileOpen={setIsOpen}
            />
            <div className={`flex-1 ${isCollapsed ? 'md:ml-16' : 'md:ml-64'} ml-0 transition-all duration-300`}>
                <AdminHeader onMenuToggle={setIsOpen} />
                <main className="p-4 md:p-6 mt-16"> {/* Added margin-top for fixed header */}
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;