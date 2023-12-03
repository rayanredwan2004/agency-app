import Image from "next/image";

async function getData() {
  let res = await fetch(process.env.BASE_URL + "api/TestimonialList");
  if (!res.ok) {
    throw new Error("Hero Section Failed");
  }
  return res.json();
}

const TestimonialList = async () => {
  const data = await getData();
  return (
    <section>
      <div className="pb-10">
        <div className="space-y-3 pl-20 py-10">
          <h4 className="text-green-500 uppercase font-medium">
            Testimonial List
          </h4>
          <h1 className="text-2xl font-bold w-[30%]">
            Better Agency/SEO Solution At Your Fingertips
          </h1>
        </div>
        <div className="grid grid-cols-3 pl-20 py-10">
          {data.map((item) => (
            <div
              key={item["id"]}
              className="rounded-2xl shadow-lg p-2 py-10 w-[350px] space-y-2 mb-10"
            >
              <Image
                className="mx-auto rounded-2xl w-[90px] h-[82px] mb-5"
                width={100}
                height={100}
                src={item["image"]}
                alt={item["name"]}
              />
              <p className="text-[#9D9D9D] text-center capitalize">
                {item["msg"]}
              </p>
              <h1 className="uppercase text-2xl font-bold text-center pt-3">
                {item["name"]}
              </h1>
              <h4 className="text-lg font-medium text-center">
                {item["designation"]}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialList;
