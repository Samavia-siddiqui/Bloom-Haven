const AboutHero = () => {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://images.pexels.com/photos/32477274/pexels-photo-32477274.jpeg)",
  }}
>
  <div className="hero-overlay bg-black/40"></div>

  <div className="hero-content text-center text-white">
    <div className="max-w-lg">
      
      <h1 className="mb-5 text-5xl font-bold leading-tight">
        Bloom Haven
      </h1>

      <p className="mb-5 text-lg">
        Fresh flowers crafted with love. Discover elegant bouquets 
        for every occasion and bring beauty to your special moments.
      </p>

      <button className="btn bg-pink-300 hover:bg-pink-400 border-none text-white rounded-full px-8">
        Shop Now
      </button>

    </div>
  </div>
</div>
  );
};

export default AboutHero;