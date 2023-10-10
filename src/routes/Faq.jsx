import { Link } from "react-router-dom";
import { useState } from "react";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const questions = [
    {
      question: "How do I start navigating?",
      answer:
        "Simply press the 'Start Navigating' button on the homepage and follow the on-screen instructions.",
    },
    {
      question: "Is this app free to use?",
      answer: "Yes, AR Navigator is completely free to use.",
    },
    {
      question: "How accurate is the navigation?",
      answer:
        "Our app uses advanced algorithms to provide you with the most accurate navigation possible. However, accuracy can vary based on several factors, including your device's capabilities.",
    },
    {
      question: "Who can use this app?",
      answer:
        "This app is designed for students, staff, and visitors to the campus.",
    },
  ];

  return (
    <div className="bg-blue-700 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="text-4xl font-black mb-4 px-4 ">
        Frequently Asked Questions
      </div>
      <div className="px-4 mb-8 w-full md:w-2/3 lg:w-1/2">
        {questions.map((item, index) => (
          <div className="mb-4" key={index}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left text-blue-100 font-bold p-4 rounded bg-blue-800"
            >
              {item.question}
            </button>
            {openIndex === index && (
              <div className="mt-2 p-4 rounded bg-blue-500">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 text-sm space-x-4">
        <Link to={`/`} className="underline hover:text-yellow-300">
          Back to Home
        </Link>
        <Link to={`/about`} className="underline hover:text-yellow-300">
          About Us
        </Link>
      </div>
    </div>
  );
};

export default FAQPage;
