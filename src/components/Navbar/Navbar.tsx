"use client";
import { ModeContext } from "@/context/ModeContext";
import Container from "@/utils/Container/Container";
import {
  KeyIcon,
  ListBulletIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import styles from "./navbar.module.css";
import LinkComponent from "../Link/Link";
import { navLinkList } from "@/constants/navbar";

const { navListContainer, navList, burgerButton, closeIconLi } = styles;

const Navbar = () => {
  const modeContext = useContext(ModeContext);
  const { currentmode, changeMode } = modeContext as TModeContext;
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);



  return (
    <nav className="bg-white dark:bg-[#192734] w-screen h-[60px] border-b-[.5px] border-[#192734] dark:border-white transition-all duration-[300ms] sticky top-0 z-50">
      <Container>
        <Link href={"/"} scroll={false} className="flex items-center justify-start gap-[10px]">
          <Image src={currentmode === 'light' ? "/images/logo2.png" : "/images/logo.png"} width={30} height={30} alt="logo" className="rounded-[50%]"></Image>
          <h1 className="text-[#192734] select-none dark:text-white font-bold">Portfolio</h1>
        </Link>

        <div className="flex items-center justify-start gap-[32px]">
          <div onClick={(e: any) => {e.target.id === "navListContainer" ? setToggleMobileMenu(false) : null }} id="navListContainer" className={navListContainer} style={{right: `${toggleMobileMenu ? "0px" : "-100vw"}`}}>
            <ul className={`flex items-center justify-start gap-[24px] bg-white dark:bg-[#192734] ${navList}`}>
              <li className={closeIconLi}>
                <button onClick={() => {setToggleMobileMenu(false)}} className={burgerButton}>
                  <XMarkIcon className="size-6  dark:text-white" />
                </button>
              </li>
              {
                navLinkList?.map((navLinkList, index)=>(
                  <LinkComponent key={index} linkPath={navLinkList?.linkPath} linkName={navLinkList?.linkName} />
                ))
              }
            </ul>
          </div>

          <div className="flex items-center justify-start gap-[12px]">
            <button onClick={() => {changeMode()}}>
              {currentmode === "light" ? (
                <MoonIcon className="size-6 text-[#192734]" />
              ) : (
                <SunIcon className="size-6 text-white" />
              )}
            </button>

            <Link href={"/login"} scroll={false}>
              <KeyIcon className="size-6 dark:text-white" />
            </Link>

            <button onClick={() => {setToggleMobileMenu(true)}} className={burgerButton}>
              <ListBulletIcon className="size-6  dark:text-white" />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
