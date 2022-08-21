import { SectionProps } from "../landing.view-model"
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/solid'

const TestimonialNavigation = () => {
  return (
    <div className="pt-8 pb-16 flex flex-wrap justify-center items-center">
      <button className="hidden mr-3 lg:mr-0 order-last lg:order-first bg-white p-4 rounded-full shadow-md text-pink-500 hover:text-pink-300 transition duration-200">
        <ArrowLeftIcon className="w-6 h-6" />
      </button>
      <div className="mb-10 max-w-lg text-center mx-auto">
        <span className="text-pink-500 font-bold">
          Testimonials
        </span>
        <h2 className="mt-4 text-4xl lg:text-5xl font-bold font-head">
          What do others think about us?
        </h2>
      </div>
      <button className="hidden order-last bg-white p-4 rounded-full shadow-md text-pink-500 hover:text-pink-300 transition duration-200">
        <ArrowRightIcon className="w-6 h-6" />
      </button>
    </div>
  )
}

const TestimonialContent = () => {
  return (
    <div className="flex w-full relative">
      <div className="flex flex-wrap justify-center mx-auto">
        <div className="mb-4 w-full lg:w-1/3 px-3">
          <div className="p-5 bg-white shadow rounded">
            Hasellus sollicitudin massa ut quam aliquam, feugiat fringilla est aliquam. Phasellus tincidunt mi a pellentesque fermentum. Quisque vitae erat iaculis, porttitor elit sed, viverra nisl. Maecenas facilisis viverra sollicitudin.
          </div>
        </div>
        <div className="mb-4 w-full lg:w-1/3 px-3">
          <div className="p-5 bg-white shadow rounded">
            Hasellus sollicitudin massa ut quam aliquam, feugiat fringilla est aliquam. Phasellus tincidunt mi a pellentesque fermentum. Quisque vitae erat iaculis, porttitor elit sed, viverra nisl. Maecenas facilisis viverra sollicitudin.
          </div>
        </div>
        <div className="mb-4 w-full lg:w-1/3 px-3">
          <div className="p-5 bg-white shadow rounded">
            Hasellus sollicitudin massa ut quam aliquam, feugiat fringilla est aliquam. Phasellus tincidunt mi a pellentesque fermentum. Quisque vitae erat iaculis, porttitor elit sed, viverra nisl. Maecenas facilisis viverra sollicitudin.
          </div>
        </div>
      </div>
    </div>
  )
}

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
  )
}