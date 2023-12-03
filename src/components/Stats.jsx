import Image from "next/image";

async function getData() {
  let res = await fetch(process.env.BASE_URL + "api/StatList");
  if (!res.ok) {
    throw new Error("Hero Section Failed");
  }
  return res.json();
}

const Stats = async () => {
  const data = await getData();
  return (
    <div className="flex flex-wrap justify-between items-center p-10 px-20 pb-20 bg-white">
      <div className="shadow-lg rounded-2xl px-20 py-16">
        <Image
          className="bg-green-100 p-4 py-5 rounded-xl mx-auto"
          src={"images/Group 3.svg"}
          width={100}
          height={100}
          alt="logo"
        />
        <p className="font-bold text-2xl text-center mt-3">
          {data["followers"]}
        </p>
        <p className="font-medium text-center">Followers</p>
      </div>
      <div className="shadow-lg rounded-2xl px-16 py-16">
        <Image
          className="bg-green-100 p-4 py-5 rounded-xl mx-auto"
          src={"images/Like.svg"}
          width={85}
          height={85}
          alt="logo"
        />
        <p className="font-bold text-2xl text-center mt-3">{data["solved"]}</p>
        <p className="font-medium text-center">Solved Problems</p>
      </div>
      <div className="shadow-lg rounded-2xl px-16 py-16">
        <Image
          className="bg-green-100 p-4 py-5 rounded-xl mx-auto"
          src={"images/Happy  1.svg"}
          width={90}
          height={90}
          alt="logo"
        />
        <p className="font-bold text-2xl text-center mt-3">
          {data["customers"]}
        </p>
        <p className="font-medium text-center">Happy Customers</p>
      </div>
      <div className=" shadow-lg rounded-2xl px-20 py-16">
        <Image
          className="bg-green-100 p-4 py-5 rounded-xl mx-auto"
          src={"images/Scan 3.svg"}
          width={90}
          height={90}
          alt="logo"
        />
        <p className="font-bold text-2xl text-center mt-3">
          {data["projects"]}
        </p>
        <p className="font-medium text-center">Projects</p>
      </div>
    </div>
  );
};

export default Stats;
