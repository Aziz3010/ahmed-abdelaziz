import { HeartIcon } from "@heroicons/react/16/solid";
import styles from "./footer.module.css";

const {footer, footerIcon} = styles;

const Footer = () => {
  return (
    <footer className={`${footer} bg-white dark:bg-[#192734] border-t-[.5px] border-[#192734] dark:border-white transition-all duration-[300ms]`}>
      <h3 className="p-0 m-0 text-[#192734] dark:text-white">Created By Ahmed Abdelaziz</h3>
      <div className="w-[20px] text-center">
        <HeartIcon className={`${footerIcon} text-red-800`}/>
      </div>
    </footer>
  )
}

export default Footer