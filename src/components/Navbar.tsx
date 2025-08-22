import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { HiMenu, HiX } from 'react-icons/hi';
import { BiChevronDown, BiGlobe } from "react-icons/bi";
import { Link } from 'react-router-dom';
import i18next from "i18next";
import martechLoogo from '../assets/martechLogo.png'

type languageOption = { language: string; code: string };

const languageOptions: languageOption[] = [
  {
    language: "English",
    code: "en",
  },
  { language: "French", code: "fr" },
  { language: "German", code: "de" },
  { language: "Spanish", code: "es" },
  { language: "Russian", code: "ru" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(i18next.language);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close language dropdown when main menu is toggled
    setIsLanguageDropdownOpen(false);
  };

  const handleLanguageChange = (selectedCode: string) => {
    setLanguage(selectedCode);
    setIsLanguageDropdownOpen(false);
    i18next.changeLanguage(selectedCode);
    // Close mobile menu after language selection
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);
 
  const navAbout = t("hero.navigation.about");
  const navPrograms = t("hero.navigation.program");
  const navTestimonials = t("hero.navigation.testimonial");
  const navCta= t("hero.navigation.navCta");

  const currentLanguage = languageOptions.find(opt => opt.code === language);

  // Desktop Language Selector Component
  const DesktopLanguageSelector = () => (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm 
                   border border-white/20 text-gray-800 hover:bg-white/20 transition-all duration-200 
                   focus:outline-none focus:ring-2 focus:ring-blue-400/50 group"
      >
        <BiGlobe className="w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-colors" />
        <span className="text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
        <BiChevronDown 
          className={`w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-all duration-200 
                     ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isLanguageDropdownOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsLanguageDropdownOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl 
                         border border-gray-200 z-20 overflow-hidden animate-in slide-in-from-top-2 
                         duration-200">
            <div className="p-2">
              {languageOptions.map(({ language: langName, code }) => (
                <button
                  key={code}
                  onClick={() => handleLanguageChange(code)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg 
                             text-left transition-all duration-150 group
                             ${language === code 
                               ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                               : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                             }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`text-xs px-2 py-1 rounded-md font-mono font-semibold
                                     ${language === code 
                                       ? 'bg-blue-100 text-blue-800' 
                                       : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                                     }`}>
                      {code.toUpperCase()}
                    </span>
                    <span className="text-sm font-medium">{langName}</span>
                  </div>
                  
                  {language === code && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );

//   // Mobile Language Selector Component
//  const MobileLanguageSelector = () => (
//     <div className="border-t border-white/20 pt-4 mt-4">
//       <div className="flex items-center space-x-2 mb-3">
//         <BiGlobe className="w-4 h-4 text-gray-300" />
//         <span className="text-sm font-medium text-gray-300">Language</span>
//       </div>
//       <div className="grid grid-cols-2 gap-2">
//         {languageOptions.map(({ language: langName, code }) => (
//           <button
//             key={code}
//             onClick={() => handleLanguageChange(code)}
//             className={`flex items-center justify-center px-3 py-2 rounded-lg text-sm font-medium
//                        transition-all duration-200 ${language === code 
//                          ? 'bg-gray-100 text-black' 
//                          : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
//                        }`}
//           >
//             <span className="mr-2">{code.toUpperCase()}</span>
//             <span className="text-xs">{langName}</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   );

const MobileLanguageSelector = () => (
  <div className="mt-4">
    <div className="flex items-center space-x-2 mb-3 px-2">
      <BiGlobe className="w-4 h-4 text-gray-400" />
      <span className="text-xs font-medium text-gray-400 uppercase">Language</span>
    </div>
    <div className="bg-gray-800/50 rounded-2xl p-1 backdrop-blur-sm">
      <div className="grid grid-cols-2 gap-1">
        {languageOptions.map(({ language: langName, code }) => (
          <button
            key={code}
            onClick={() => handleLanguageChange(code)}
            className={`relative px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
              language === code 
                ? 'bg-white text-gray-900 shadow-lg' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <div className="flex flex-col items-center space-y-1">
              <span className="font-bold text-xs">{code.toUpperCase()}</span>
              <span className="text-[10px]">{langName}</span>
            </div>
            {language === code && (
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  </div>
);

  return (
    // <div className={location.pathname === '/' ? 'hidden' : ''}>
      <nav className="z-50">
        <div className="w-full lg:w-[80%] mx-auto flex items-center justify-between bg-white  text-black border-1 border-gray-200  p-2 md:p-4 rounded-full">
          {/* Logo */}
          <Link to={'/'} className="flex items-center space-x-2">
            <img className='h-10' src={martechLoogo} alt={'logo'} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link to="/about" className="hover:text-blue-400 transition-colors duration-200">{navAbout}</Link>
            <Link to="/program" className="hover:text-blue-400 transition-colors duration-200">{navPrograms}</Link>
            <Link to="/testimonial" className="hover:text-blue-400 transition-colors duration-200">{navTestimonials}</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors duration-200">{navCta}</Link>
            <DesktopLanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
            ? 'max-h-full opacity-100'
            : 'max-h-0 opacity-0'
          } overflow-hidden`}>
          <div className="px-4 py-6 space-y-4 bg-[var(--color-blueThree)] backdrop-blur-sm rounded-lg mt-4 text-white">
            <Link onClick={toggleMenu} to="/about" className="block py-2 hover:text-blue-400 transition-colors duration-200">{navAbout}</Link>
            <Link onClick={toggleMenu} to="/program" className="block py-2 hover:text-blue-400 transition-colors duration-200">{navPrograms}</Link>
            <Link onClick={toggleMenu} to="/testimonial" className="block py-2 hover:text-blue-400 transition-colors duration-200">{navTestimonials}</Link>
            <Link onClick={toggleMenu} to="/contact" className="block py-2 hover:text-blue-400 transition-colors duration-200">{navCta}</Link>
            <MobileLanguageSelector />
          </div>
        </div>
      </nav>
    // </div>
  )
}

export default Navbar

