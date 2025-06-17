import React, { useState } from 'react';

const NewspaperViewer: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dateStr = selectedDate.toISOString().split('T')[0];
  const pdfUrl = `/papers/${dateStr}.pdf`;

  const viewerUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(window.location.origin + pdfUrl)}`;

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    setSelectedDate(newDate);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="bg-gray-100 px-6 py-4 border-b flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold font-baloo text-gray-800">
          दिवसभर बातम्या - {selectedDate.toLocaleDateString('mr-IN')}
        </h2>
        <input
          type="date"
          value={dateStr}
          onChange={handleDateChange}
          className="border rounded px-3 py-1 text-sm mt-2 sm:mt-0"
          max={new Date().toISOString().split('T')[0]}
        />
      </div>

      {/* PDF Viewer via Mozilla */}
      <div className="flex-grow">
        <iframe
          src={viewerUrl}
          title="Newspaper PDF"
          className="w-full h-full"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default NewspaperViewer;
