"use client"
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import styles from "../styles/mainLayout.module.css";

const {mainElement} = styles;

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className={mainElement}>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout

