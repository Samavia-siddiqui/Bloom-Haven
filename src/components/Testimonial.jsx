import React from "react";

const reviews = [
  {
    name: "Ayesha",
    text: "Beautiful flowers and fast delivery. Loved the quality!",
  },
  {
    name: "Sara",
    text: "The bouquet was fresh and exactly like the picture.",
  },
  {
    name: "Hina",
    text: "Perfect for gifts. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 px-6 bg-pink-100">
      
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        What Our Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((rev, i) => (
          <div key={i} className="card bg-base-100 shadow-lg p-6 rounded-2xl">
            
            <p className="text-gray-800 italic">
              “{rev.text}”
            </p>

            <h4 className="mt-4 font-semibold text-pink-400">
              — {rev.name}
            </h4>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Testimonials;