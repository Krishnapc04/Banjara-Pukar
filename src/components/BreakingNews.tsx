import React, { useEffect, useState } from 'react';
import { Clock, TrendingUp } from 'lucide-react';

const BreakingNews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const breakingNews = [
    {
      id: 1,
      title: "मुंबईत मुसळधार पाऊस, अनेक भागांत पाणी साचले",
      time: "२ तासांपूर्वी",
      category: "मुंबई"
    },
    {
      id: 2,
      title: "महाराष्ट्र सरकारच्या नवीन धोरणावर चर्चा",
      time: "३ तासांपूर्वी",
      category: "राज्य"
    },
    {
      id: 3,
      title: "पुण्यात नवीन मेट्रो लाइनचे उद्घाटन",
      time: "४ तासांपूर्वी",
      category: "पुणे"
    },
    {
      id: 4,
      title: "कृषी क्षेत्रातील नवीन योजना जाहीर",
      time: "५ तासांपूर्वी",
      category: "कृषी"
    }
  ];

  const headlines = [
    "आंतरराष्ट्रीय क्रिकेट सामन्यात भारताचा विजय",
    "शिक्षण क्षेत्रातील नवीन बदल",
    "तंत्रज्ञान क्षेत्रातील प्रगती",
    "आर्थिक धोरणावर नवीन निर्णय",
    "आरोग्य सेवांमध्ये सुधारणा",
    "पर्यावरण संरक्षणाचे नवीन उपक्रम"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [breakingNews.length]);

  return (
    <div className="space-y-6">
      {/* Breaking News Ticker */}
      <div className="bg-red-600 text-white rounded-lg overflow-hidden">
        <div className="flex items-center">
          <div className="bg-red-700 px-4 py-3 flex items-center space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span className="font-bold">ब्रेकिंग</span>
          </div>
          <div className="flex-1 py-3 px-4">
            <div className="animate-pulse">
              <p className="font-medium">
                {breakingNews[currentIndex].title}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Headlines */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white px-6 py-4">
          <h2 className="text-xl font-bold font-baloo">ताज्या बातम्या</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {breakingNews.map((news, index) => (
              <div
                key={news.id}
                className={`p-4 rounded-lg border-l-4 transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 font-tiro leading-relaxed">
                      {news.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{news.time}</span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {news.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Today's Headlines */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-orange-600 text-white px-6 py-4">
          <h2 className="text-xl font-bold font-baloo">आजच्या मुख्य बातम्या</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {headlines.map((headline, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors cursor-pointer"
              >
                <h3 className="font-medium text-gray-800 font-tiro leading-relaxed">
                  {headline}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  तपशील वाचा...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;