import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ProgramFAQSection = () => {
  const { t } = useTranslation();
  const [openFAQ, setOpenFAQ] = useState(null);

  // Extract all translatable content
  const headerTitle = t("programFAQSection.header.title");
  const contentTitle = t("programFAQSection.content.title");
  const contentDescription = t("programFAQSection.content.description");
  const viewAllButton = t("programFAQSection.content.viewAllButton");

  // FAQs with translations
  const faqs = [
    {
      id: 1,
      question: t("programFAQSection.faqs.salary.question"),
      answer: t("programFAQSection.faqs.salary.answer")
    },
    {
      id: 2,
      question: t("programFAQSection.faqs.demand.question"),
      answer: t("programFAQSection.faqs.demand.answer")
    },
    {
      id: 3,
      question: t("programFAQSection.faqs.background.question"),
      answer: t("programFAQSection.faqs.background.answer")
    },
    {
      id: 4,
      question: t("programFAQSection.faqs.tools.question"),
      answer: t("programFAQSection.faqs.tools.answer")
    },
    {
      id: 5,
      question: t("programFAQSection.faqs.jobHelp.question"),
      answer: t("programFAQSection.faqs.jobHelp.answer")
    },
    {
      id: 6,
      question: t("programFAQSection.faqs.ai.question"),
      answer: t("programFAQSection.faqs.ai.answer")
    }
  ];

  const toggleFAQ = (id:any) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="
              inline-block text-3xl md:text-4xl font-bold  mb-4
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
             {headerTitle}
            </h2>

        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="
              inline-block text-3xl md:text-4xl font-bold leading-tight
              bg-gradient-to-r from-black via-[var(--color-blueThree)] to-[var(--color-blueTwo)]
              bg-clip-text !text-transparent
              [-webkit-text-fill-color:transparent]
            ">
              {contentTitle}
            </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                {contentDescription}
              </p>
            </div>
            
          <button className="text-white sm:w-auto px-8 py-4 bg-gradient-to-b from-[var(--color-blueFour)] to-[var(--color-blueOne)]  rounded-full font-semibold hover:from-gray-950 hover:to-[var(--color-blueThree)] transition-all duration-100 transform hover:scale-105">
                {viewAllButton}
              </button>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-100 group"
                >
                  <span className="text-gray-900 font-medium text-base pr-4 leading-relaxed">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-blue-600 group-hover:text-blue-600 transition-colors duration-100">
                      {openFAQ === faq.id ? (
                        <FaMinus className="w-3 h-3" />
                      ) : (
                        <FaPlus className="w-3 h-3" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-5">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramFAQSection;