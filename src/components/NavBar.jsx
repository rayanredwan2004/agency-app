"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav } from "./NavObj";

const NavBar = ({ className }) => {
  const nav = Nav;
  const path = usePathname();
  return (
    <nav className={className}>
      <div className="relative flex justify-between gap-7 p-5 px-20 z-10">
        <div className="text-lg font-bold tracking-wide">
          <Link href="/">
            <div className="flex pt-2">
              <h1>Design</h1>
              <h1 className="text-orange-500">AGENCY</h1>
            </div>
          </Link>
        </div>
        <div className="flex gap-10">
          <div>
            <ul className="flex pt-2 gap-10 text-black font-medium">
              {nav.map((item) => (
                <Link key={item["id"]} href={item["value"]}>
                  <li
                    className={
                      path === item["value"] ? "text-orange-600" : null
                    }
                  >
                    {item["name"]}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="space-x-5">
            <Link href="/">
              <button className="border border-green-500 rounded-lg p-1.5 px-4 font-medium hover:bg-green-500 hover:text-white focus:ring-2 focus:ring-green-700">
                Login
              </button>
            </Link>
            <Link href="/">
              <button className="bg-green-500 rounded-lg p-2 px-4 text-white font-medium hover:bg-green-600 focus:ring-2 focus:ring-green-700">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 right-0"
        src="/images/Frame 8022.png"
        alt=""
      />
    </nav>
  );
};

export default NavBar;
