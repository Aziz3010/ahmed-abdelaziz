import { HeartIcon } from "@heroicons/react/16/solid";
import styles from "./footer.module.css";

const {footer, footerIcon} = styles;

const Footer = () => {
  return (
    <footer className={footer}>
      <h3 className="p-0 m-0">Created By Ahmed Abdelaziz</h3>
      <div className="w-[20px] text-center">
        <HeartIcon className={`${footerIcon} text-red-800`}/>
      </div>
    </footer>
  )
}

export default Footer