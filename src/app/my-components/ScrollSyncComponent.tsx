import React from 'react'

const ScrollSyncComponent = () => {
  return (
    <div className='text-white'>
          <div className=" flex items-center justify-center p-8">
              <div className="max-w-7xl w-full flex flex-col md:flex-row gap-16">
                  {/* Left Column */}
                  <div className="flex-1 flex  items-center">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                          Hello to your next big idea!
                      </h1>
                  </div>
                  {/* Right Column */}
                  <div className="flex-1 flex items-center">
                      <p className="text-lg md:text-xl text-white leading-relaxed">
                          Snow Dream Studios specialized itself on it, Ideas in extraordinary Results to transform. With specialist
                          knowledge in Marketing, design and Development work we with Them together, to Solutions to create, the
                          inspire and lead. Everyone Step of the Way is on it aligned,{" "}
                          <span className="text-gray-500">incomparable Results to delivery.</span>
                      </p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default ScrollSyncComponent
