import { SectionProps } from "../landing.view-model";

const FormContent = () => {
  return (
    <form>
      <div className="mb-4">
        <input className="w-full p-4 text-xs font-semibold bg-gray-100 rounded outline-none" placeholder="Subject" />
      </div>
      <div className="mb-4">
        <input className="w-full p-4 text-xs font-semibold bg-gray-100 rounded outline-none" placeholder="Name" />
      </div>
      <div className="mb-4">
        <input className="w-full p-4 text-xs font-semibold bg-gray-100 rounded outline-none" placeholder="Email" />
      </div>
      <div className="mb-4">
        <textarea className="w-full h-24 resize-none p-4 text-xs font-semibold bg-gray-100 rounded outline-none border-none" placeholder="Message" />
      </div>
      <div className="flex justify-between items-center">
        <label>
          <input className="mr-3" type="checkbox" />
          <span className="text-sm font-semibold">I agree to terms and conditions</span>
        </label>
        <button className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-pink-500 hover:bg-pink-700 text-white font-bold leading-loose transition duration:200">Email Us</button>
      </div>
    </form>
  )
}

export const ContactSection = ({ sectionId }: SectionProps) => {
  return (
    <section id={sectionId} className="relative py-10 lg:h-screen bg-white">
      <div className="hidden lg:flex items-center absolute inset-0 w-2/5 px-4 rounded-tr-6xl bg-gray-50">
        <img className="mx-auto rounded-3xl md:rounded-br-none shadow-md" alt="" title="https://iconscout.com/contributors/delesign" src="assets/contact-us.png" />
      </div>
      <div className="lg:absolute inset-0 flex justify-center items-center ml-auto w-full lg:w-3/5 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto py-10">
            <h3 className="text-2xl mb-6">Got Any Questions? Contact Us!</h3>
            <FormContent />
          </div>
        </div>
      </div>
    </section>
  )
}