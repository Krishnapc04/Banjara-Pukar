import React, { useRef, useState, useEffect } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';

const NewspaperViewer: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const dateStr = selectedDate.toISOString().split('T')[0];
  const title = `दिवसभर बातम्या - ${selectedDate.toLocaleDateString('mr-IN')}`;

  // Fetch PDF URL from backend
  const fetchPdfUrl = async (date: string) => {
    try {
      const response = await fetch(`http://localhost:3000/newspaper?date=${date}`);
      if (!response.ok) throw new Error('PDF not found for this date.');
      const data = await response.json();
      setPdfUrl(data.url);
    } catch (err) {
      console.error('Error fetching PDF:', err);
      setPdfUrl(null);
    }
  };

  // Update on date change
  useEffect(() => {
    fetchPdfUrl(dateStr);
  }, [dateStr]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(e.target.value));
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
        <h2 className="text-xl font-bold font-baloo text-gray-800">{title}</h2>
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
        {pdfUrl ? (
          <iframe
            ref={iframeRef}
            src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`}
            title="Newspaper PDF"
            className="w-full h-full"
            frameBorder="0"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600 text-lg">
            वर्तमान दिवशीसाठी PDF उपलब्ध नाही.
          </div>
        )}
      </div>
    </div>
  );
};

export default NewspaperViewer;
