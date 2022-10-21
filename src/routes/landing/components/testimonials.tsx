import { SectionProps } from '../landing.view-model';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid';

const TestimonialNavigation = () => {
  return (
    <div className="pt-8 pb-16 flex flex-wrap justify-center items-center">
      <button className="hidden mr-3 lg:mr-0 order-last lg:order-first bg-white p-4 rounded-full shadow-md text-pink-500 hover:text-pink-300 transition duration-200">
        <ArrowLeftIcon className="w-6 h-6" />
      </button>
      <div className="mb-10 max-w-lg text-center mx-auto">
        <span className="text-primary-400 font-bold">Testimonials</span>
        <h2 className="mt-4 text-4xl lg:text-5xl font-bold font-head">What do others think about us?</h2>
      </div>
      <button className="hidden order-last bg-white p-4 rounded-full shadow-md text-pink-500 hover:text-pink-300 transition duration-200">
        <ArrowRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

const TestimonialContent = () => {
  return (
    <div className="flex w-full relative">
      <div className="flex flex-wrap justify-center mx-auto">
        <div className="mb-4 w-full lg:w-1/3 px-3">
          <div className="p-5 bg-white shadow rounded">
            I reached out to chart trapper wanting to learn about charts and forex. I only knew the basic terminology of forex. I left every session with a clear understanding about what chart trapper taught me. How he teaches is what helped the information given to me stick. He’s very relatable and makes learning about whichever subject we are on fun. He uses a lot of analogies and examples to help simplify a subject. I had zero knowledge of the cryptocurrency world. Now I have the confidence to research different cryptocurrencies on my own and even teach about it if someone were to ask. I can now predict the trends on cryptocurrencies because he taught me how to read a graph properly through regular forex. It’s really life changing because now I can jump in those conversations on both subjects while making money on the side. Charttrapper really made the whole experience fun and easy to pick up.
            <span className="flex mt-3 w-full">- Quincy Taylor</span>
          </div>
        </div>
        <div className="mb-4 w-full lg:w-1/3 px-3">
          <div className="p-5 bg-white shadow rounded">
            I wanna say it was late 2020 when Duronte 1st started explaining crypto to me. The way he explained how the blockchain in general works to the consensus of different networks really changed my outlook on crypto as a whole. Not only did he teach me the knowledge but he thought me the way to do my own due diligence when it came to looking for solid investments. With Duronte’s guidance I was also able to land a job at one of the worlds largest crypto firms. I can honestly credit my success in the crypto space to him.
            <span className="flex mt-3 w-full">- Sump</span>
          </div>
        </div>
        <div className="mb-4 w-full lg:w-1/3 px-3">
          <div className="p-5 bg-white shadow rounded">
            Hasellus sollicitudin massa ut quam aliquam, feugiat fringilla est aliquam. Phasellus tincidunt mi a
            pellentesque fermentum. Quisque vitae erat iaculis, porttitor elit sed, viverra nisl. Maecenas facilisis
            viverra sollicitudin.
            <span className="flex mt-3 w-full">- Derrick</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TestimonialsSection = ({ sectionId }: SectionProps) => {
  return (
    <section id={sectionId}>
      <div className="py-20 overflow-hidden radius-for-skewed bg-white">
        <div className="container mx-auto px-16">
          <TestimonialNavigation />
          <TestimonialContent />
        </div>
      </div>
    </section>
  );
};
