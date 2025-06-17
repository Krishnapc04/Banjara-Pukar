import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import NewspaperUpload from './NewspaperUpload';
import { LogOut, Settings, Upload, BarChart3 } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Admin
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <a
              href="#upload"
              className="border-red-500 text-red-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              <Upload className="inline w-4 h-4 mr-2" />
              Upload Newspaper
            </a>
            <a
              href="#analytics"
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              <BarChart3 className="inline w-4 h-4 mr-2" />
              Analytics
            </a>
            <a
              href="#settings"
              className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
            >
              <Settings className="inline w-4 h-4 mr-2" />
              Settings
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Upload Section */}
          <div id="upload">
            <NewspaperUpload />
          </div>

          {/* Analytics Section (Placeholder) */}
          <div id="analytics" className="mt-12">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Analytics</h3>
              <p className="text-gray-600">Analytics dashboard coming soon...</p>
            </div>
          </div>

          {/* Settings Section (Placeholder) */}
          <div id="settings" className="mt-12">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Settings</h3>
              <p className="text-gray-600">Admin settings coming soon...</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel; 