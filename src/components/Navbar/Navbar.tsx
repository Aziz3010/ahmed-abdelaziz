"use client";
import { ModeContext } from "@/context/ModeContext";
import Container from "@/utils/Container/Container";
import {
  KeyIcon,
  ListBulletIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Navbar = () => {
  const modeContext = useContext(ModeContext);
  const { currentmode, changeMode } = modeContext as TModeContext;

  console.log(currentmode, '=========');

  return (
    <nav className="bg-white dark:bg-black w-screen h-[60px] border-b-[1px] border-black dark:border-white transition-all duration-[300ms]">
      <Container>
        <Link href={"/"} className="flex items-center justify-start gap-[10px]">
          <Image src={currentmode === 'light' ? "/images/logo2.png" : "/images/logo.png"} width={30} height={30} alt="logo" className="rounded-[50%]"></Image>
          <h1 className="text-black select-none dark:text-white font-bold">Portfolio</h1>
        </Link>

        <div className="flex items-center justify-start gap-[32px]">
          <ul className="flex items-center justify-start gap-[24px]">
            <li>
              <Link className="capitalize select-none p-[8px] rounded-[4px] hover:bg-gray-700 text-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-[300ms]" href="/">home</Link>
            </li>
            <li>
              <Link className="capitalize select-none p-[8px] rounded-[4px] hover:bg-gray-700 text-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-[300ms]" href="/projects">projects</Link>
            </li>
            <li>
              <Link className="capitalize select-none p-[8px] rounded-[4px] hover:bg-gray-700 text-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-[300ms]" href="/contributions">contributions</Link>
            </li>
          </ul>

          <div className="flex items-center justify-start gap-[12px]">
            <button onClick={() => {changeMode()}}>
              {currentmode === "light" ? (
                <MoonIcon className="size-6 text-black" />
              ) : (
                <SunIcon className="size-6 text-white" />
              )}
            </button>

            <Link href={"/login"}>
              <KeyIcon className="size-6 dark:text-white" />
            </Link>

            <button onClick={() => {}} className="hidden">
              <ListBulletIcon className="size-6  dark:text-white" />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
