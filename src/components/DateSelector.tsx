import React, { useState } from 'react';
import { Calendar, X } from 'lucide-react';

interface DateSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  isOpen,
  onClose,
  selectedDate,
  onDateSelect
}) => {
  const [viewDate, setViewDate] = useState(selectedDate);

  if (!isOpen) return null;

  const today = new Date();
  const currentMonth = viewDate.getMonth();
  const currentYear = viewDate.getFullYear();

  // Get first day of month and number of days
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  // Generate calendar days
  const calendarDays = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(new Date(currentYear, currentMonth, day));
  }

  const months = [
    'जानेवारी', 'फेब्रुवारी', 'मार्च', 'एप्रिल', 'मे', 'जून',
    'जुलै', 'ऑगस्ट', 'सप्टेंबर', 'ऑक्टोबर', 'नोव्हेंबर', 'डिसेंबर'
  ];

  const weekDays = ['रवि', 'सोम', 'मंगळ', 'बुध', 'गुरु', 'शुक्र', 'शनि'];

  const goToPreviousMonth = () => {
    setViewDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const goToNextMonth = () => {
    setViewDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const handleDateClick = (date: Date) => {
    onDateSelect(date);
    onClose();
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  };

  const isToday = (date: Date) => {
    return isSameDay(date, today);
  };

  const isSelected = (date: Date) => {
    return isSameDay(date, selectedDate);
  };

  const isFutureDate = (date: Date) => {
    return date > today;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <h2 className="text-lg font-bold font-baloo">दिनांक निवडा</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Calendar */}
        <div className="p-4">
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={goToPreviousMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ‹
            </button>
            <h3 className="text-lg font-semibold font-baloo">
              {months[currentMonth]} {currentYear}
            </h3>
            <button
              onClick={goToNextMonth}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ›
            </button>
          </div>

          {/* Week Days */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map((day) => (
              <div
                key={day}
                className="text-center text-sm font-medium text-gray-600 p-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((date, index) => (
              <div key={index} className="aspect-square">
                {date && (
                  <button
                    onClick={() => handleDateClick(date)}
                    disabled={isFutureDate(date)}
                    className={`w-full h-full rounded-lg text-sm font-medium transition-colors ${
                      isFutureDate(date)
                        ? 'text-gray-300 cursor-not-allowed'
                        : isSelected(date)
                        ? 'bg-blue-600 text-white'
                        : isToday(date)
                        ? 'bg-red-100 text-red-800 border-2 border-red-300'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {date.getDate()}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>निवडलेला दिनांक:</span>
            <span className="font-medium">
              {selectedDate.toLocaleDateString('mr-IN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateSelector;