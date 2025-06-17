import React from 'react';
import { Calendar, Menu, Search, Bell, Shield } from 'lucide-react';

interface HeaderProps {
  onDateSelect: () => void;
  onAdminLogin?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDateSelect, onAdminLogin }) => {
  const today = new Date();
  const marathiDate = today.toLocaleDateString('mr-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="bg-white shadow-lg border-b-4 border-red-600">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>आज: {marathiDate}</span>
            <span className="hidden md:inline">तापमान: २८°C</span>
          </div>
          <div className="flex items-center space-x-3">
            <Bell className="w-4 h-4" />
            <span className="hidden sm:inline">ब्रेकिंग न्यूज</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 font-baloo">
            बंजारा पुकार 
            </h1>
            <p className="text-sm text-gray-600 font-tiro mt-5">
              महाराष्ट्राचे विश्वसनीय वर्तमानपत्र
            </p>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">मुख्य</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">महाराष्ट्र</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">भारत</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">जगत</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">खेळ</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium">मनोरंजन</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-red-600" />
            <button
              onClick={onDateSelect}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">दिनांक निवडा</span>
            </button>
            {onAdminLogin && (
              <button
                onClick={onAdminLogin}
                className="flex items-center space-x-2 bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm"
                title="Admin Login"
              >
                <Shield className="w-4 h-4" />
                <span className="hidden sm:inline">Admin</span>
              </button>
            )}
            <Menu className="w-6 h-6 text-gray-600 cursor-pointer hover:text-red-600 lg:hidden" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-3">
          <div className="flex space-x-4 overflow-x-auto">
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium whitespace-nowrap">मुख्य</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium whitespace-nowrap">महाराष्ट्र</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium whitespace-nowrap">भारत</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium whitespace-nowrap">जगत</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium whitespace-nowrap">खेळ</a>
            <a href="#" className="text-gray-700 hover:text-red-600 font-medium whitespace-nowrap">मनोरंजन</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;