import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-blue-700 h-screen flex flex-col justify-center items-center text-white">
      <div className="text-4xl font-black mb-4">AR Navigator</div>
      <p className="text-center mb-8 px-4 text-blue-100">
        Navigate your way around the campus effortlessly with our augmented
        reality-based guidance system.
      </p>
      <div className="space-y-4">
        <div>
          <Link to={"/navigate"}>
            <button className="bg-orange-500  hover:bg-orange-400 w-44 h-12 text-white font-bold py-2 px-4 rounded">
              Start Navigating
            </button>
          </Link>
        </div>
        <div>
          <Link to={"/map"}>
            <button className="bg-emerald-500 hover:bg-emerald-400 w-44 h-12 text-white font-bold py-2 px-4 rounded">
              View Map
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 text-sm space-x-4">
        <Link to={`about`} className="underline hover:text-yellow-300">
          About
        </Link>
        <Link to={`faq`} className="underline hover:text-yellow-300">
          FAQ
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
