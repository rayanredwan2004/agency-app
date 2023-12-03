import Image from "next/image";

async function getData() {
  let res = await fetch(process.env.BASE_URL + "api/BrandList");
  if (!res.ok) {
    throw new Error("Hero Section Failed");
  }
  return res.json();
}

const Brand = async () => {
  const data = await getData();
  return (
    <section>
      <div className="mt-10">
        <ul className="flex justify-between p-5 px-20 pt-10 bg-green-50">
          {data.map((item) => (
            <li key={item["id"]}>
              <Image
                src={item["image"]}
                alt={item["name"]}
                width={100}
                height={100}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Brand;
