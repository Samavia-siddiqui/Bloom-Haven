import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-base-200 text-gray-700 px-6 py-12">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-pink-400">
            Bloom Haven
          </h2>
          <p className="mt-3 text-sm">
            Fresh flowers crafted with love. Making every moment special with beautiful blooms.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a className="hover:text-pink-400 cursor-pointer">Home</a></li>
            <li><a className="hover:text-pink-400 cursor-pointer">About</a></li>
            <li><a className="hover:text-pink-400 cursor-pointer">Shop</a></li>
            <li><a className="hover:text-pink-400 cursor-pointer">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p>Email: info@bloomhaven.com</p>
          <p className="mt-1">Phone: +92 300 1234567</p>
          <p className="mt-1">Karachi, Pakistan</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center mt-10 text-sm text-gray-500">
        © 2026 Bloom Haven. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer