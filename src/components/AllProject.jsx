import Image from "next/image";

async function getData() {
  let res = await fetch(process.env.BASE_URL + "api/AllProject");
  if (!res.ok) {
    throw new Error("Hero Section Failed");
  }
  return res.json();
}

const AllProject = async () => {
  const data = await getData();
  return (
    <div className="pb-10">
      <div className="space-y-3 pl-20 py-10">
        <h4 className="text-green-500 uppercase font-medium">All Project</h4>
        <h1 className="text-2xl font-bold w-[30%]">
          Better Agency/SEO Solution At Your Fingertips
        </h1>
      </div>
      <div className="grid grid-cols-2 justify-center mx-auto ml-20">
        {data.map((item) => (
          <div
            key={item["id"]}
            className="p-10 rounded-2xl shadow-lg w-[560px] mb-10"
          >
            <Image
              className="w-[544px] rounded-2xl"
              width={500}
              height={500}
              src={item["image"]}
              alt={item["remark"]}
            />
            <h1 className="text-lg uppercase font-bold text-center mt-4">
              {item["title"]}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProject;
