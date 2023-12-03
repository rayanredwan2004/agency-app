import Image from "next/image";

async function getData() {
  let res = await fetch(process.env.BASE_URL + "api/WorkList");
  if (!res.ok) {
    throw new Error("Hero Section Failed");
  }
  return res.json();
}

const WorkList = async () => {
  const data = await getData();
  return (
    <section>
      <div className="bg-white mt-6 pb-10 p-20">
        <div>
          <div className="space-y-1.5">
            <h4 className="text-green-500 font-medium uppercase">Work List</h4>
            <h1 className="text-2xl font-bold w-1/3">
              We provide the Perfect Solution to your business growth
            </h1>
          </div>
          <div className="flex justify-between space-x-10 ml-5">
            {data.map((item) => (
              <div key={item["id"]} className="space-y-3 mt-12 p-6 w-1/3">
                <Image
                  className="bg-green-100 p-4 rounded-xl"
                  src={"images/Activity.svg"}
                  width={80}
                  height={80}
                  alt="Activity"
                />
                <h1 className="font-bold text-lg capitalize">
                  {item["title"]}
                </h1>
                <p className="text-lg w-4/5">{item["des"]}</p>
                <div>
                  <a className="flex p-2 pt-8 space-x-2" href="/">
                    <p className="font-medium">Learn More</p>
                    <img src="images/Vector.svg" alt="vector" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkList;
