import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-4 font-baloo">
              दिवसभर बातम्या
            </h3>
            <p className="text-gray-300 mb-4 font-tiro leading-relaxed">
              महाराष्ट्राचे विश्वसनीय वर्तमानपत्र. आम्ही तुमच्यासाठी दिवसभर ताज्या आणि विश्वसनीय बातम्या घेऊन येतो.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-baloo">द्रुत दुवे</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  मुख्य पान
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  आजचे वर्तमानपत्र
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  ब्रेकिंग न्यूज
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  खेळ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  मनोरंजन
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  व्यापार
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-baloo">महत्वाचे दुवे</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  आमच्याबद्दल
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  संपर्क
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  जाहिरात
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  करिअर
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  अटी आणि शर्ती
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  गोपनीयता धोरण
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-baloo">संपर्क माहिती</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  मुंबई, महाराष्ट्र ४०००१
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  +९१ ९८७६५ ४३२१०
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  info@divasabharbatmya.com
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">दैनिक बातम्या मिळवा</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="तुमचा ईमेल"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-sm"
                />
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-lg transition-colors">
                  सबस्क्राइब
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © २०२५ दिवसभर बातम्या. सर्व हक्क राखीव.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                गोपनीयता
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                अटी
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                मदत
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;