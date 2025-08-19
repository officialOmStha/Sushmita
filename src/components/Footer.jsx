import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full p-4 md:px-20 md:py-10 bg-gray-100 text-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Brand Name */}
        <h2 className="text-xl font-semibold">✨ Glam by Sushmita ✨</h2>
        <p className="text-sm text-gray-600">Enhancing beauty, one look at a time.</p>

        {/* Social Links */}
        <div className="flex space-x-6 text-lg">
          <a 
            href="https://www.instagram.com/sus_me_ta/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-pink-500"
          >
            📸 Instagram
          </a>
          <a 
            href="https://www.facebook.com/susmita.shrestha.14" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-600"
          >
            👍 Facebook
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Glam by Sushmita. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer