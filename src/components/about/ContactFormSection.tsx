import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactFormSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [charCount, setCharCount] = useState(0);

  // Extract all translatable content
  const headingContact = t("contactForm.heading.contact");
  const headingUs = t("contactForm.heading.us");
  const subheading = t("contactForm.subheading");
  const description = t("contactForm.description");

  // Form labels and placeholders
  const nameLabel = t("contactForm.form.name.label");
  const namePlaceholder = t("contactForm.form.name.placeholder");
  const emailLabel = t("contactForm.form.email.label");
  const emailPlaceholder = t("contactForm.form.email.placeholder");
  const messageLabel = t("contactForm.form.message.label");
  const messagePlaceholder = t("contactForm.form.message.placeholder");

  // Helper text
  const requiredText = t("contactForm.form.required");
  const maxCharText = t("contactForm.form.maxCharacters");
  const buttonText = t("contactForm.form.button");

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    
    if (name === 'message' && value.length > 500) {
      return; // Don't allow more than 500 characters
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-blue-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 md:items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
                           <span className="
              inline-block text-4xl md:text-5xl font-bold 
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
               {headingContact} {headingUs}
            </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                {subheading}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className=" p-1 md:p-8 ">
            <div className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                  {nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={namePlaceholder}
                  required
                  className="w-full  bg-white px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-100 placeholder-gray-400"
                />
                <p className="text-xs text-blue-600">{requiredText}</p>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                  {emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={emailPlaceholder}
                  required
                  className="w-full bg-white px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-100 placeholder-gray-400"
                />
                <p className="text-xs text-blue-600">{requiredText}</p>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                  {messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={messagePlaceholder}
                  rows={4}
                  className="w-full bg-white  px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-100 placeholder-gray-400 resize-none"
                />
                <p className="text-xs text-gray-500">
                  {maxCharText} ({charCount}/500)
                </p>
              </div>

              {/* Submit Button */}
              <button 
               onClick={handleSubmit}
              className=" text-white sm:w-auto px-8 py-4 bg-gradient-to-b from-[var(--color-blueFour)] to-[var(--color-blueOne)]  rounded-full font-semibold hover:from-gray-950 hover:to-[var(--color-blueThree)] transition-all duration-100 transform hover:scale-105">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;