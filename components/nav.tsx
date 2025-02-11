"use client";

import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "@/app/images/logo.webp";

const Nav = () => {
  const [menu, setMenu] = useState(true);

  const HandleMenu = () => {
    setMenu((prev) => !prev);
  };

  const path = usePathname();

  const navLink = [
    { id: "01", name: "home", link: "/" },
    { id: "02", name: "destination", link: "/destination" },
    { id: "03", name: "vehicles", link: "/technology" },
    { id: "04", name: "booking", link: "/booking" },
  ];

  return (
    <div className="2xl:container 2xl:mx-auto">
      <nav className="fixed w-full flex items-center justify-between p-6 md:px-11 lg:p-14 z-50">
        <Link href="/">
          <Image
            src={logo}
            width={48}
            height={46}
            alt="logo"
            className="w-10 h-10 object-cover"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <div
          className={classNames(
            "z-50 lg:hidden mr-4 flex flex-col gap-2 cursor-pointer duration-300 md:hidden",
            { "-rotate-45": menu === false }
          )}
          onClick={HandleMenu}
        >
          <div
            className={classNames("w-6 h-[0.188rem] bg-white duration-300", {
              "translate-y-[9px]": menu === false,
            })}
          ></div>
          <div
            className={classNames("w-6 h-[0.188rem] bg-white duration-300", {
              "opacity-0": menu === false,
            })}
          ></div>
          <div
            className={classNames("w-6 h-[0.188rem] bg-white duration-300", {
              "rotate-90 -translate-y-[10px]": menu === false,
            })}
          ></div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={classNames(
            `fixed inset-y-0 right-0 h-screen w-64 bg-white/5 backdrop-blur-md duration-300 transform md:hidden`,
            {
              "translate-x-full": menu === true,
              "translate-x-0": menu === false,
            }
          )}
          style={{ pointerEvents: menu ? "none" : "auto" }}
        >
          <div className="pt-[7.5rem] pl-8 flex flex-col gap-8">
            {navLink.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                onClick={HandleMenu}
                className={`relative flex gap-3 text-base text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 ${
                  path === item.link ? "after:w-full" : "after:w-0"
                }`}
              >
                <p className="hidden lg:block font-bold">{item.id}</p>
                <p className="uppercase">{item.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center w-[27.125rem] bg-white/50 h-[0.063rem] z-50 translate-x-16 mr-auto xl:translate-x-28"></div>

        <div
          className={`hidden md:flex w-[28.125rem] h-24 bg-white/5 backdrop-blur-md absolute right-0 items-center justify-center text-white gap-10 text-sm lg:w-[790px] xl:w-[890px] 2xl:left-[507px]`}
        >
          {navLink.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`relative flex gap-3 text-base text-white lg:gap-4 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 ${
                path === item.link ? "after:w-full" : "after:w-0"
              }`}
            >
              <p className="hidden lg:block font-bold">{item.id}</p>
              <p className="uppercase">{item.name}</p>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
