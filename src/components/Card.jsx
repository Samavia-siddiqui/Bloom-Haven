import React from 'react'

const products = [
  {
    img: "https://t4.ftcdn.net/jpg/01/01/76/11/360_F_101761144_JLrGeY2fRdHLhdfY06OC0Kb4rZ9UGraP.jpg",
    title: "Rose Bouquet",
    price: "$25",
  },
  {
    img: "https://www.fnp.sg/images/pr/l/v20251021121704/charming-white-lilies-bouquet_2.jpg",
    title: "White Lilies",
    price: "$30",
  },
  {
    img: "https://www.dahliamayflowerfarm.com/cdn/shop/files/668322E5-CDFC-4AFB-B1AF-49A4E163D266.jpg?v=1773860583&width=1024",
    title: "Mixed Flowers",
    price: "$28",
  },
  {
  img: "https://asset.bloomnation.com/c_fill,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,h_2000,q_auto,w_2000/v1740120084/vendor/9246/catalog/product/2/0/20241030195233_file_67228e8193e55",
  title: "Sunflower Bunch",
  price: "$22",
},
{
  img: "https://heartthorn.ca/cdn/shop/products/PinkParadiseTulipbouquet1_1200x.jpg?v=1630418094",
  title: "Pink Tulips",
  price: "$27",
},
{
  img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/339913e4-a72b-4bb1-baf4-8dac1dad2bd0.__CR0,0,1600,1600_PT0_SX300_V1___.jpg",
  title: "Orchid Vase",
  price: "$35",
}
];

const Card = () => {
  return (
    <div className="py-16 px-6 bg-pink-100">
      
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Fresh Flowers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item, index) => (
          
          <div key={index} className="card bg-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <figure>
              <img 
                src={item.img} 
                alt={item.title} 
                className="h-60 w-full object-cover"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-pink-400">{item.price}</p>
            </div>
          </div>

        ))}
      </div>

    </div>
  )
}

export default Card