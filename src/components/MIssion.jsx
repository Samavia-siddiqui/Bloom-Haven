const Mission = () => {
  return (
    <div className=" bg-pink-100  py-16 px-6 text-center">
      
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        Our Mission & Values
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        
        <div className="p-6 shadow-lg rounded-2xl bg-white">
          <h3 className="font-semibold text-pink-400">Quality</h3>
          <p className="mt-2 text-gray-600">
            We deliver only the freshest flowers.
          </p>
        </div>

        <div className="p-6  bg-white shadow-lg rounded-2xl">
          <h3 className="font-semibold text-pink-400">Creativity</h3>
          <p className="mt-2 text-gray-600">
            Unique designs for every occasion.
          </p>
        </div>

        <div className="p-6  bg-white shadow-lg rounded-2xl">
          <h3 className="font-semibold text-pink-400">Trust</h3>
          <p className="mt-2 text-gray-600">
            Customer satisfaction is our priority.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Mission;