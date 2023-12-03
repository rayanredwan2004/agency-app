import Image from "next/image";

async function getData() {
  let res = await fetch(process.env.BASE_URL + "api/HeroList");
  if (!res.ok) {
    throw new Error("Hero Section Failed");
  }
  return res.json();
}

const Hero = async () => {
  const data = await getData();
  return (
    <section>
      <div className="flex mt-12 p-5 px-20">
        {/* Hero Text */}
        <div className="w-1/2 mt-5">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold capitalize">{data["title"]}</h1>
            <p className="font-semibold max-w-lg tracking-wide">
              {data["description"]}
            </p>
          </div>
          <div className="mt-10">
            <button className="bg-green-500 rounded-lg p-3 px-6 text-white font-medium hover:bg-green-600 focus:ring-2 focus:ring-green-700 ">
              Get Started
            </button>
          </div>
        </div>
        {/* Hero Image */}
        <div className="-space-y-5">
          <div className="flex gap-6 pb-4 -space-x-5">
            <Image
              className="w-[40%] h-60 m-2 rounded-xl object-cover"
              src={data["image1"]}
              width={200}
              height={200}
              alt="image1"
            />
            <Image
              className=" w-[60%] h-60 m-2 rounded-xl object-cover"
              src={data["image2"]}
              width={200}
              height={200}
              alt="image2"
            />
          </div>
          <div className="flex gap-6 -space-x-5">
            <Image
              src={data["image3"]}
              width={200}
              height={200}
              className="w-[60%] h-60 m-2 rounded-xl object-cover"
              alt="image3"
            />
            <Image
              src={data["image4"]}
              width={200}
              height={200}
              className="w-[40%] h-60 m-2 rounded-xl object-cover"
              alt="image1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
