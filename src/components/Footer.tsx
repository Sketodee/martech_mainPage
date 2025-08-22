import { useEffect, useState } from 'react';
import { 
  FaLinkedinIn, 
  FaFacebookF, 
  FaInstagram,
} from 'react-icons/fa';
import { RiTelegram2Fill } from "react-icons/ri";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import martechLoogo from '../assets/martechLogo.png'
type languageOption = { language: string; code: string };

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [, setLanguage] = useState(i18next.language);

  // Extract all translatable content
  const companyDescription = t("footer.company.description");
  const moreAboutUs = t("footer.company.moreAboutUs");

  // Navigation links
    const navAbout = t("footer.navigation.about");
  const navPrograms = t("footer.navigation.program");
  const navTestimonials = t("footer.navigation.testimonial");

  // Contact section
  const contactHeading = t("footer.contact.heading");
  const contactPhone = t("footer.contact.phone");
  const contactEmail = t("footer.contact.email");

  // Location section
  const locationHeading = t("footer.location.heading");
  const locationAddress1 = t("footer.location.address1");
  const locationAddress2 = t("footer.location.address2");

  // Language section
  const languagesHeading = t("footer.languages.heading");

  // Copyright
  const copyrightText = t("footer.copyright.text");
  const allRightsReserved = t("footer.copyright.allRights");

  // Social media labels
  const linkedinLabel = t("footer.social.linkedin");
  const facebookLabel = t("footer.social.facebook");
  const twitterLabel = t("footer.social.twitter");
  const instagramLabel = t("footer.social.instagram");

  // Language options with translations
  const languageOptions: languageOption[] = [
    {
      language: t("footer.languages.options.english"),
      code: "en",
    },
    { 
      language: t("footer.languages.options.spanish"), 
      code: "es" 
    },
    { 
      language: t("footer.languages.options.french"), 
      code: "fr" 
    },
    { 
      language: t("footer.languages.options.german"), 
      code: "de" 
    },
    { 
      language: t("footer.languages.options.russian"), 
      code: "ru" 
    },
  ];

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    i18next.changeLanguage(selectedLanguage); // Update language in i18next
  };

  useEffect(() => {
    document.body.dir = i18n.dir(); //sets the body to ltr or rtl
  }, [i18n, i18n.language]);

  return (
    <footer className="bg-gradient-to-br from-[#5E27D3]  to-[#31146D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Company Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
                <img className='h-10' src={martechLoogo} alt={'logo'} />
            </div>

            {/* Description */}
            <p className="text-purple-100 leading-relaxed max-w-sm">
              {companyDescription}
            </p>

            {/* More About Us Link */}
            <button className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors duration-200 group">
              <span className="text-sm">{moreAboutUs}</span>
              <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
            </button>

            {/* Social Icons - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3 w-fit">
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors duration-200"
                aria-label={linkedinLabel}
              >
                <FaLinkedinIn className="text-black w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors duration-200"
                aria-label={facebookLabel}
              >
                <FaFacebookF className="text-black w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors duration-200"
                aria-label={twitterLabel}
              >
                <RiTelegram2Fill className="text-black w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors duration-200"
                aria-label={instagramLabel}
              >
                <FaInstagram className="text-black w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Navigation, Contact, Location, Languages */}
          <div className="space-y-8">
            {/* Navigation Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <Link to="/about" className="text-purple-100 hover:text-white transition-colors duration-200">
                {navAbout}
              </Link>
              <Link to="/program" className="text-purple-100 hover:text-white transition-colors duration-200">
                {navPrograms}
              </Link>
              <Link to="/testimonial" className="text-purple-100 hover:text-white transition-colors duration-200">
                {navTestimonials}
              </Link>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-lg font-semibold mb-3">{contactHeading}</h4>
              <div className="space-y-1">
                <p className="text-purple-100">{contactPhone}</p>
                <p className="text-purple-100">{contactEmail}</p>
              </div>
            </div>

            {/* Location */}
            <div>
              <h4 className="text-lg font-semibold mb-3">{locationHeading}</h4>
              <div className="text-purple-100">
                <p>{locationAddress1}</p>
                <p>{locationAddress2}</p>
              </div>
            </div>

            {/* Languages */}
            <div className="flex justify-end">
              <div className="text-right">
                <p className="text-sm text-purple-200 mb-2">{languagesHeading}</p>
                <div className="flex space-x-4">
                  {languageOptions.map(({  code }) => (
                    <span
                      key={code}
                      onClick={() => handleLanguageChange(code)}
                      className={`text-sm font-medium cursor-pointer transition-colors duration-200 ${
                        i18n.language === code
                          ? 'text-white border-b border-white'
                          : 'text-purple-200 hover:text-white'
                      }`}
                    >
                      {code.charAt(0).toUpperCase() + code.charAt(1).toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Centered */}
        <div className="text-center mt-12 pt-8 border-t border-purple-500 border-opacity-30">
          <div className="text-purple-200 text-sm space-y-1">
            <p>{copyrightText}</p>
            <p>{allRightsReserved}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;