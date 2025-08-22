import React from 'react'
import { FadeInContainer } from './FadeInContainer'

const Services = () => {
  return (
    <FadeInContainer>
    <section 
    id='services'
    className="p-4 md:p-20 w-full min-h-[100vh] flex flex-col justify-center items-center bg-gradient-to-r from-pink-50 via-white to-purple-50">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 text-center">
        Our <span className="text-pink-500">Services</span>
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2">💍 Bridal Makeup</h3>
          <p className="text-gray-600 text-sm">
            Elegant, flawless, and picture-perfect for your special day.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2">🎉 Event Makeup</h3>
          <p className="text-gray-600 text-sm">
            From subtle glam to bold statements, perfect for parties & celebrations.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2">📸 Photoshoot Makeup</h3>
          <p className="text-gray-600 text-sm">
            Camera-ready looks designed for portraits, editorials, and brand shoots.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2">💄 Everyday Glam</h3>
          <p className="text-gray-600 text-sm">
            Fresh, natural, and effortless makeup to enhance your daily confidence.
          </p>
        </div>
      </div>
    </section>
    </FadeInContainer>
  )
}

export default Services
