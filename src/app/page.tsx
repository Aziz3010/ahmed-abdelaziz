import MainLayout from "@/layouts/MainLayout";
import styles from "../styles/home.module.css";
import { Introduction, Summary, TechnicalExpertise, Title, achievements } from "@/constants/homePage";

const {homePage_hero_section} = styles;

export default function Home() {
  return (
    <MainLayout>
      <section className={`${homePage_hero_section} pt-[40px] pb-[40px]`}>
        <div className="mb-6">
          <h2 className="text-[#3b4a54] dark:text-white">
            Hi, I&apos;m ahmed abdelaziz
          </h2>
          <span className="text-[#3b4a54] dark:text-white">
            {Title}
          </span>
        </div>

        <div className="paragraph">
          <div className="part mb-6">
            <h3 className="text-[#3b4a54] dark:text-white text-[18px] underline">
              Introduction:
            </h3>
            <p className="text-[#3b4a54] dark:text-white text-[16px] pl-[30px]">
              {Introduction}
            </p>
          </div>

          <div className="part mb-6">
            <h3 className="text-[#3b4a54] dark:text-white text-[18px] underline">
              Technical Expertise:
            </h3>

            <ol className="list-decimal pl-[30px]">
              {TechnicalExpertise?.map((msg: string, index: number)=>(
                <li key={index} className="text-[#3b4a54] dark:text-white text-[16px]">
                  {msg}
                </li>
              ))}
            </ol>
          </div>

          <div className="part mb-6">
            <h3 className="text-[#3b4a54] dark:text-white text-[18px] underline">
              Achievements:
            </h3>
            <ol className="list-decimal pl-[30px]">
              {achievements?.map((msg: string, index: number)=>(
                <li key={index} className="text-[#3b4a54] dark:text-white text-[16px]">
                  {msg}
                </li>
              ))}
            </ol>

          </div>

          <div className="part mb-6">
            <h3 className="text-[#3b4a54] dark:text-white text-[18px] underline">
              Summary:
            </h3>
            <p className="text-[#3b4a54] dark:text-white text-[16px] pl-[30px]">
              {Summary}
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
