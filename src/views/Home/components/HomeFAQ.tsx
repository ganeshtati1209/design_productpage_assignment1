import React from 'react';
import { BiChevronDown } from 'react-icons/bi';

interface HomeFAQProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const HomeFAQ: React.FC<HomeFAQProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-indigo-100">
    <button
      onClick={onClick}
      className="w-full py-2 px-0 md:px-4 flex items-center justify-between text-left transition-colors hover:bg-indigo-50/50 rounded-lg"
    >
      <h3 className="text-[16px] leading-[1.2] font-medium text-gray-900 pr-8">{question}</h3>
      <div className={`flex-shrink-0 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        <BiChevronDown className="w-5 h-5 text-indigo-600" />
      </div>
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="p-2 md:p-4 pt-0 text-gray-600">
        {answer}
      </div>
    </div>
  </div>
);

export default HomeFAQ;
