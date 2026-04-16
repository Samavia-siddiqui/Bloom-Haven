import React from "react";

const categories = [
  { name: "Roses", img: "https://mariamsflowers.com/cdn/shop/files/9D7A24DE-160D-492E-8BC2-6F87A9CD7E1B.jpg?v=1733856424" },
  { name: "Lilies", img: "https://t4.ftcdn.net/jpg/10/56/99/71/360_F_1056997113_JQY3ysScZA6y75SVlZiU4szVdvxAZUcZ.jpg" },
  { name: "Wedding", img: "https://www.appleyardflowers.com/blog/wp-content/uploads/2024/08/roses-wedding.jpg" },
  { name: "Gifts", img: "https://www.fleur-box.com/wp-content/uploads/Flower-Gift-Boxes-is-a-bouquet-more-than-just-a-bunch-of-flowers-put-together-1024x1001.jpg" },
];

const Categories = () => {
  return (
    <div className="py-16 px-6 bg-white">
      
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Some Popular Categories
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden group cursor-pointer">
            
            <img
              src={cat.img}
              alt={cat.name}
              className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">
                {cat.name}
              </h3>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Categories;