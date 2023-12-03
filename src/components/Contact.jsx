const Contact = () => {
  return (
    <div className="bg-white pt-10 p-20">
      <div>
        <h4 className="text-center uppercase text-green-600 font-medium mt-6">
          SUBSCRIBE
        </h4>
        <h1 className="text-center text-2xl font-bold mt-4 mb-4 px-[35%] capitalize">
          Subscribe to get the latest news about us
        </h1>
        <p className="text-center text-sm capitalize font-medium text-[#8B8B8B]">
          Please drop your email below to get daily update about what we do
        </p>
      </div>
      <div>
        <form className="relative flex justify-center mt-12">
          <input
            className="w-[50%] p-3 rounded-lg border border-gray-800"
            type="text"
            placeholder="Enter Your Email Adress"
          />
          <button className="absolute bottom-[5.5px] right-[302px] bg-orange-600 rounded-lg text-sm p-2.5 px-5 text-white font-medium">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
