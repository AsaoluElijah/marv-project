import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="bg-blue-700 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="text-4xl font-black mb-4">About AR Navigator</div>
      <div className="mb-8 px-4 w-full md:w-2/3 lg:w-1/2">
        <p className="text-blue-100 mb-4">
          AR Navigator is designed to revolutionize the way you explore our
          campus. Utilizing cutting-edge augmented reality technology, our app
          aims to provide real-time, interactive navigation assistance to anyone
          who needs it.
        </p>
        <p className="text-blue-100">
          Developed by a Jesuleye Marvellous, passionate about improving campus
          life, we&lsquo;re always open to feedback and suggestions to make your
          navigation experience even better.
        </p>
      </div>
      <div className="mt-8 text-sm space-x-4">
        <Link to={`/`} className="underline hover:text-yellow-300">
          Back to Home
        </Link>
        <Link to={`/faq`} className="underline hover:text-yellow-300">
          FAQ
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
