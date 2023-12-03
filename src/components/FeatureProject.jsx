import Image from "next/image";

async function getData() {
  let res = await fetch(process.env.BASE_URL + "api/FeaturedProject");
  if (!res.ok) {
    throw new Error("Hero Section Failed");
  }
  return res.json();
}

const FeatureProject = async () => {
  const data = await getData();
  return (
    <section>
      <div className="gap-7 p-5 bg-green-50">
        <div className="ml-20">
          <h4 className="uppercase text-green-500 font-semibold mb-3">
            Featured Project
          </h4>
          <h1 className="text-4xl font-bold w-[48%] leading-10">
            We provide the Perfect Solution to your business growth
          </h1>
        </div>
        <div className="flex mt-20 ml-20 space-x-8">
          {/* large image */}
          <div className="space-y-2">
            <Image
              className="rounded-xl"
              src={data[0]["image"]}
              width={900}
              height={700}
              alt="mask"
            />
            <p className="text-xs text-[#2E3E5C] font-medium ml-1">
              App Design - June 20, 2022
            </p>
            <h4 className="font-bold text-xl capitalize text-blue-950 ml-1">
              {data[0]["title"]}
            </h4>
          </div>
          {/* Small image */}
          <div className="space-y-5">
            <div className="grid grid-cols-2 ml-10">
              {data.slice(0, 4).map((item) => (
                <div key={item["id"]} className="">
                  <Image
                    className="rounded-2xl "
                    src={item["image"]}
                    width={220}
                    height={220}
                    alt={item["remark"]}
                  />
                  <p className="text-xs text-[#2E3E5C] font-medium ml-1 mt-1 mb-2">
                    App Design - June 20, 2022
                  </p>
                  <h4 className="font-bold text-xl capitalize leading-6 text-blue-950 ml-1 mb-6 w-[90%]">
                    {item["title"]}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProject;
