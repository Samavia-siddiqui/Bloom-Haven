import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-[90vh] overflow-hidden bg-gradient-to-r from-pink-100 via-rose-50 to-green-50 px-6">
      <div className="hero-content flex-col lg:flex-row-reverse gap-15 felx-wrap ">

        <img
          src="https://images.unsplash.com/photo-1709744302546-b4acf9522aea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Flowers"
          className="max-w-sm rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
        />
        <div>
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Fresh Flowers <br />
            <span className="text-pink-400">Delivered with Love</span>
          </h1>

          <p className="py-6 text-gray-600 max-w-md">
            Discover beautifully crafted bouquets for every occasion.
            From romantic roses to elegant lilies, we bring nature’s
            beauty right to your doorstep.
          </p>

          <button className="btn bg-pink-300 border-none hover:bg-pink-400 text-white rounded-full px-8">
            Shop Now
          </button>
        </div>

      </div>
    </div>
  )
}

export default Hero