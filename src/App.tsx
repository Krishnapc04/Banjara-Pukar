import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import NewspaperViewer from './components/NewspaperViewer';
import BreakingNews from './components/BreakingNews';
import DateSelector from './components/DateSelector';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';

const AppContent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDateSelectorOpen, setIsDateSelectorOpen] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const { isAdmin } = useAuth();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const openDateSelector = () => {
    setIsDateSelectorOpen(true);
  };

  const closeDateSelector = () => {
    setIsDateSelectorOpen(false);
  };

  const handleAdminLoginClick = () => {
    setShowAdminLogin(true);
  };

  const handleAdminLoginClose = () => {
    setShowAdminLogin(false);
  };

  // If admin is logged in, show admin panel
  if (isAdmin) {
    return <AdminPanel />;
  }

  // If admin login is requested, show login page
  if (showAdminLogin) {
    return <AdminLogin />;
  }

  // Show main newspaper application
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onDateSelect={openDateSelector} 
        onAdminLogin={handleAdminLoginClick}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-2">
            <NewspaperViewer 
              // selectedDate={selectedDate}
              // onDateChange={handleDateSelect}
            />
          </div>
          
          {/* Sidebar */}
          <div className="xl:col-span-1">
            <BreakingNews />
          </div>
        </div>
      </main>

      <Footer />

      <DateSelector
        isOpen={isDateSelectorOpen}
        onClose={closeDateSelector}
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
      />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;