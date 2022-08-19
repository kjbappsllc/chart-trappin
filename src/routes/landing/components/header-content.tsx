
const HeadingLeftPanel = () => {
  return (
    <div className='w-full lg:w-1/2 px-4 mb-12 md:mb-20 flex items-center lg:mb-0'>
      <div className='w-full text-center lg:text-left'>
        <div className='max-w-md mx-auto lg:mx-0'>
          <h2 className='mb-3 text-4xl lg:text-5xl font-bold font-heading space-x-4'>
            <span>Take Your Trading To A Whole New</span>
            <span className='text-pink-500'>Level</span>
          </h2>
        </div>
        <div className="max-w-sm mx-auto lg:mx-0">
          <p className="leading-loose text-gray-400 mb-6">
            Need to add some inspiration content here. Putting this as a place holder until I can replace.
          </p>
        </div>
        <div>
          <a className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200">
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}

export const HeaderContent = () => {
  return (
    <div className='pt-12 lg:pt-20 pb-20'>
      <div className="container mx-auto px-4">
        <div className='flex flex-wrap'>
          <HeadingLeftPanel />
        </div>
      </div>
    </div>
  )
}