import React from "react";

const Story = () => {
    return (
        <section className="py-20 px-6 bg-base-100">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                <div className="relative group">
                    <img
                        src="https://images.pexels.com/photos/31497181/pexels-photo-31497181.jpeg"
                        alt="shop"
                        className="rounded-3xl shadow-2xl w-full max-w-md object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 rounded-3xl bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
                </div>

                <div className="text-center lg:text-left">
                    <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                        Our Story
                    </h2>

                    <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-xl">
                        Bloom Haven started with a passion for flowers and creativity.
                        Every bouquet is carefully designed to bring emotion, beauty, and meaning to your special moments.
                    </p>

                    <button className="mt-6 px-6 py-3 rounded-full  bg-pink-400 hover:bg-pink-500 text-white font-medium shadow-md transition">
                        Learn More
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Story;