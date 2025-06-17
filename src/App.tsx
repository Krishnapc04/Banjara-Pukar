import React, { useState } from 'react';
import Header from './components/Header';
import NewspaperViewer from './components/NewspaperViewer';
import BreakingNews from './components/BreakingNews';
import DateSelector from './components/DateSelector';
import Footer from './components/Footer';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDateSelectorOpen, setIsDateSelectorOpen] = useState(false);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const openDateSelector = () => {
    setIsDateSelectorOpen(true);
  };

  const closeDateSelector = () => {
    setIsDateSelectorOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onDateSelect={openDateSelector} />
      
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
}

export default App;