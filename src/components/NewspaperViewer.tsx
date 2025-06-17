import React, { useRef, useState } from 'react';

const NewspaperViewer: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const dateStr = selectedDate.toISOString().split('T')[0];
  const pdfUrl = `/papers/${dateStr}.pdf`; // Your PDF should be in public/papers/ folder
  const title = `दिवसभर बातम्या - ${selectedDate.toLocaleDateString('mr-IN')}`;

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    setSelectedDate(newDate);
  };

  const handleFullScreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div ref={containerRef} className="w-full h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="bg-gray-100 px-6 py-4 border-b flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold font-baloo text-gray-800">{title}</h2>
        </div>
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <input
            type="date"
            value={dateStr}
            onChange={handleDateChange}
            className="border rounded px-3 py-1 text-sm"
            max={new Date().toISOString().split('T')[0]}
          />
          <button
            onClick={handleFullScreen}
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Full Screen
          </button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-grow">
        <iframe
          ref={iframeRef}
          src={pdfUrl}
          title="Newspaper PDF"
          className="w-full h-full"
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default NewspaperViewer;
