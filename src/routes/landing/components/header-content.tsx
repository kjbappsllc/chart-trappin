import ProfitSavingPng from '../../../assets/profit-saving.png';

const HeadingLeftPanel = () => {
  return (
    <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 flex items-center lg:mb-0">
      <div className="w-full text-center lg:text-left">
        <div className="max-w-md mx-auto lg:mx-0">
          <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading space-x-4">
            <span>Take Your Trading To A Whole New</span>
            <span className="text-primary-400">Level</span>
          </h2>
        </div>
        <div className="max-w-sm mx-auto lg:mx-0">
          <p className="leading-loose text-gray-400 mb-6">
            Trading/Investing is you vs you. We will hold the mirror in your face and teach you to defeat the
            undisciplined version of yourself day in and day out.
          </p>
        </div>
        <div>
          <button className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-primary-400 hover:bg-primary-500 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200">
            Get Started
          </button>
          <button className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200 text-blue-500">
            Our Discord
          </button>
        </div>
      </div>
    </div>
  );
};

const HeadingRightPanel = () => {
  return (
    <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
      <img
        alt="profit-saving"
        className="h-128 w-full max-w-lg object-cover rounded-3xl md:rounded-br-none shadow-md"
        src={ProfitSavingPng}
      />
    </div>
  );
};

export const HeaderContentSection = () => {
  return (
    <section id="header-content">
      <div className="pt-28 lg:pt-32 bg-gray-50 rounded-br-6xl pb-20">
        <div className="container mx-auto px-16 py-12 my-4">
          <div className="flex flex-wrap">
            <HeadingLeftPanel />
            <HeadingRightPanel />
          </div>
        </div>
      </div>
      <div className="mr-20">
        <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
          <polygon fill="currentColor" points="0,0 10,0 0,10"></polygon>
        </svg>
      </div>
    </section>
  );
};
