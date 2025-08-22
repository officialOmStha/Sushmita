import React from 'react'
import { FadeInContainer } from './FadeInContainer'

const About = () => {
    return (
        <>
        <FadeInContainer>
        <section className="w-full min-h-[100vh] p-4 md:p-20 flex flex-col justify-center items-center bg-gradient-to-r from-purple-50 via-white to-pink-50 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          About <span className="text-pink-500">Me</span>
        </h2>

        {/* Paragraph */}
        <p className="max-w-3xl text-lg md:text-xl text-gray-600 leading-relaxed">
          Hi, I’m <span className="font-semibold text-gray-800">Sushmita</span>, 
          a passionate makeup artist dedicated to enhancing natural beauty and 
          creating timeless looks. With <span className="text-pink-500 font-medium">4 years of experience</span>, 
          I specialize in bridal makeup, event glam, and photoshoot-ready artistry 
          that makes you feel confident, radiant, and unforgettable.
        </p>
      </section>
      </FadeInContainer>
      </>
    )
}

export default About