import Image from "next/image";

async function getData() {
  let res = await fetch(process.env.BASE_URL + "api/AllService");
  if (!res.ok) {
    throw new Error("Hero Section Failed");
  }
  return res.json();
}

const AllService = async () => {
  const data = await getData();
  return (
    <div className="pb-10">
      <div className="space-y-3 pl-20 py-10">
        <h4 className="text-green-500 uppercase font-medium">
          Our All Services
        </h4>
        <h1 className="text-2xl capitalize font-bold w-[30%]">
          {data[0]["tag"]}
        </h1>
      </div>
      <div className="space-y-10">
        <div className="grid grid-cols-2 pl-14 pr-10 gap-10">
          {data.map((item) => (
            <div
              key={item["id"]}
              className="shadow-md rounded-2xl pt-5 px-7 pb-7"
            >
              <div className="space-y-1 mb-5">
                <h1 className="uppercase text-xl font-bold">{item["title"]}</h1>
                <p className="text-[#9D9D9D] capitalize">{item["des"]}</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between space-x-2">
                  <Image
                    className="w-[61%] rounded-xl object-cover"
                    src={item["image1"]}
                    width={500}
                    height={500}
                    alt={item["tag"]}
                  />
                  <Image
                    className="w-[35%] rounded-xl object-cover"
                    src={item["image2"]}
                    width={500}
                    height={500}
                    alt={item["tag"]}
                  />
                </div>
                <div className="flex justify-between space-x-2">
                  <Image
                    className="w-[48%] rounded-xl object-cover"
                    src={item["image3"]}
                    width={500}
                    height={500}
                    alt={item["tag"]}
                  />
                  <Image
                    className="w-[48%] rounded-xl object-cover"
                    src={item["image4"]}
                    width={500}
                    height={500}
                    alt={item["tag"]}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* <div className="shadow-lg rounded-2xl w-[45%]">
            <div className="pt-5 pl-7">
              <h1 className="text-2xl font-semibold pt-5">
                Build &amp; Launch without problems
              </h1>
              <p className="text-[#9D9D9D]">
                Increase your team’s productivity and save time with a bot that
                answers and fields customer inquiries
              </p>
            </div>
            <div className="-space-y-11">
              <div className="flex -space-x-11">
                <img src="/images/Rectangle 2095.png" alt="" />
                <img src="/images/Rectangle 2096.png" alt="" />
              </div>
              <div className="flex -space-x-11">
                <img src="/images/Rectangle 2097 (3).png" alt="" />
                <img src="/images/Rectangle 2098.png" alt="" />
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="flex justify-around pl-14">
          <div className="shadow-lg rounded-2xl w-[45%]">
            <div className="pt-5 pl-7">
              <h1 className="text-2xl font-semibold pt-5">
                Build &amp; Launch without problems
              </h1>
              <p className="text-[#9D9D9D]">
                Increase your team’s productivity and save time with a bot that
                answers and fields customer inquiries
              </p>
            </div>
            <div className="-space-y-11">
              <div className="flex -space-x-11">
                <img src="/images/Rectangle 2095.png" alt="" />
                <img src="/images/Rectangle 2096.png" alt="" />
              </div>
              <div className="flex -space-x-11">
                <img src="/images/Rectangle 2097 (3).png" alt="" />
                <img src="/images/Rectangle 2098.png" alt="" />
              </div>
            </div>
          </div>
          <div className="shadow-lg rounded-2xl w-[45%]">
            <div className="pt-5 pl-7">
              <h1 className="text-2xl font-semibold pt-5">
                Build &amp; Launch without problems
              </h1>
              <p className="text-[#9D9D9D]">
                Increase your team’s productivity and save time with a bot that
                answers and fields customer inquiries
              </p>
            </div>
            <div className="-space-y-11">
              <div className="flex -space-x-11">
                <img src="/images/Rectangle 2095.png" alt="" />
                <img src="/images/Rectangle 2096.png" alt="" />
              </div>
              <div className="flex -space-x-11">
                <img src="/images/Rectangle 2097 (3).png" alt="" />
                <img src="/images/Rectangle 2098.png" alt="" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AllService;
