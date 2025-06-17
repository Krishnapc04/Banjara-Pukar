import React, { useRef, useState } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';

const NewspaperViewer: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const dateStr = selectedDate.toISOString().split('T')[0];
  const pdfUrl = `/papers/${dateStr}.pdf`;
  const viewerUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(window.location.origin + pdfUrl)}`;

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    setSelectedDate(newDate);
  };

  const toggleFullScreen = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    if (!document.fullscreenElement) {
      iframe.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="bg-gray-100 px-6 py-4 border-b flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-bold font-baloo text-gray-800">
          दिवसभर बातम्या - {selectedDate.toLocaleDateString('mr-IN')}
        </h2>
        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
          <input
            type="date"
            value={dateStr}
            onChange={handleDateChange}
            className="border rounded px-3 py-1 text-sm"
            max={new Date().toISOString().split('T')[0]}
          />
          <button
            onClick={toggleFullScreen}
            className="ml-2 p-2 bg-white border rounded hover:bg-gray-200"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-grow">
        <iframe
          ref={iframeRef}
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
