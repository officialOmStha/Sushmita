import React from 'react'

const Home = () => {
    return (
        <>
      <section
        className="p-4 md:p-20 w-full min-h-[100vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-pink-100 via-white to-purple-100"
      >
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 tracking-wide">
          Beauty & Glam with <span className="text-pink-500">Sushmita</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
          Professional makeup artistry tailored to your unique style – for weddings, 
          events, photoshoots, and everyday glam. Let your beauty shine effortlessly ✨
        </p>

        {/* CTA Buttons */}
        <div className="flex space-x-4">
          <a
            href="#services"
            className="px-6 py-3 bg-pink-500 text-white rounded-2xl shadow-lg hover:bg-pink-600 transition duration-300"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-pink-500 text-pink-500 rounded-2xl hover:bg-pink-50 transition duration-300"
          >
            Book Now
          </a>
        </div>
      </section>
    </>
    )
}

export default Home