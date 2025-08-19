import React from 'react'

const Why = () => {
  return (
    <>
      <section className="p-4 md:p-20 w-full min-h-[100vh] flex flex-col justify-center items-center bg-gradient-to-r from-purple-50 via-white to-pink-50">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 text-center">
          Why <span className="text-pink-500">Choose Me?</span>
        </h2>

        {/* List of Benefits */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          <li className="bg-white shadow-md rounded-2xl p-6 flex items-start space-x-3 hover:shadow-xl transition duration-300">
            <span className="text-green-500 text-2xl">✔</span>
            <p className="text-gray-700 text-lg">
              Personalized makeup looks to suit your style & skin tone
            </p>
          </li>

          <li className="bg-white shadow-md rounded-2xl p-6 flex items-start space-x-3 hover:shadow-xl transition duration-300">
            <span className="text-green-500 text-2xl">✔</span>
            <p className="text-gray-700 text-lg">
              High-quality, professional products for long-lasting wear
            </p>
          </li>

          <li className="bg-white shadow-md rounded-2xl p-6 flex items-start space-x-3 hover:shadow-xl transition duration-300">
            <span className="text-green-500 text-2xl">✔</span>
            <p className="text-gray-700 text-lg">
              Friendly, relaxing, and professional experience
            </p>
          </li>

          <li className="bg-white shadow-md rounded-2xl p-6 flex items-start space-x-3 hover:shadow-xl transition duration-300">
            <span className="text-green-500 text-2xl">✔</span>
            <p className="text-gray-700 text-lg">
              Trusted by brides, models, and influencers
            </p>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Why
