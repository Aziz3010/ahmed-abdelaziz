import MainLayout from "@/layouts/MainLayout";
import styles from "../styles/home.module.css";

const {homePage_hero_section} = styles;

export default function Home() {
  return (
    <MainLayout>
      <section className={`${homePage_hero_section} pt-[40px] pb-[40px]`}>
        <div className="mb-6">
          <h2 className="text-[#3b4a54] dark:text-white">
            I am ahmed abdelaziz
          </h2>
          <span className="text-[#3b4a54] dark:text-white">
            front-end developer
          </span>
        </div>

        <div className="paragraph">
          <div className="part mb-6">
            <h3 className="text-[#3b4a54] dark:text-white text-[18px] underline">
              Introduction:
            </h3>
            <p className="text-[#3b4a54] dark:text-white text-[16px] pl-[30px]">
              I'm a passionate mid-senior front-end developer specializing in
              React.js and Next.js, with a keen eye for crafting engaging user
              experiences. With several years of hands-on experience in web
              development, I thrive in dynamic environments where creativity and
              innovation are valued. My journey began with a fascination for
              code, and it has evolved into a commitment to delivering
              high-quality, scalable solutions that exceed client expectations.
            </p>
          </div>

          <div className="part mb-6">
            <h3 className="text-[#3b4a54] dark:text-white text-[18px] underline">
              Technical Expertise:
            </h3>

            <ol className="list-decimal pl-[30px]">
              <li className="text-[#3b4a54] dark:text-white text-[16px]">
                Proficient in React.js and Next.js for building robust and
                interactive user interfaces.
              </li>

              <li className="text-[#3b4a54] dark:text-white text-[16px]">
                Extensive experience with modern web development technologies
                such as HTML5, CSS3, and JavaScript.
              </li>

              <li className="text-[#3b4a54] dark:text-white text-[16px]">
                Skilled in utilizing Redux for state management and
                maintaining application-wide data flow.
              </li>

              <li className="text-[#3b4a54] dark:text-white text-[16px]">
                Strong understanding of responsive design principles and
                mobile-first development.
              </li>

              <li className="text-[#3b4a54] dark:text-white text-[16px]">
                Familiarity with GraphQL for efficient data fetching and
                manipulation.
              </li>

              <li className="text-[#3b4a54] dark:text-white text-[16px]">
                Experience in integrating third-party APIs to enhance
                application functionality.
              </li>

              <li className="text-[#3b4a54] dark:text-white text-[16px]">
                Knowledgeable in optimizing web performance and improving page
                load times.
              </li>

              <li className="text-[#3b4a54] dark:text-white text-[16px]">
                Competent in using Git for version control and collaborative
                development workflows.
              </li>

              <li className="text-[#3b4a54] dark:text-white text-[16px]">
                Experience in working with Agile methodologies, ensuring
                timely delivery of features and updates.
              </li>

              <li className="text-[#3b4a54] dark:text-white text-[16px]">
                Proven ability to troubleshoot and debug complex issues to
                ensure seamless user experiences.
              </li>
            </ol>
          </div>

          <div className="part mb-6">
            <h3 className="text-[#3b4a54] dark:text-white text-[18px] underline">
              Key Achievements:
            </h3>
            <p className="text-[#3b4a54] dark:text-white text-[16px] pl-[30px]">
              Led the development of a scalable e-commerce platform using
              React.js and Next.js, resulting in a 30% increase in conversion
              rates. Implemented a dynamic data visualization dashboard for
              real-time analytics, improving decision-making processes for
              stakeholders. Optimized page load times by implementing lazy
              loading and code splitting techniques, resulting in a 40%
              improvement in performance metrics. Collaborated with
              cross-functional teams to deliver innovative solutions and exceed
              project objectives. Mentored junior developers, fostering a
              culture of continuous learning and growth within the team.
              Received accolades from clients for delivering projects on time
              and within budget while maintaining high-quality standards.
              Actively contributed to the open-source community by sharing code
              snippets, tutorials, and participating in forums. Successfully
              integrated third-party authentication systems, enhancing security
              measures and user authentication processes. Implemented A/B
              testing strategies to analyze user behavior and optimize
              conversion funnels. Continuously updated skills and knowledge
              through self-learning and participation in industry events and
              workshops.
            </p>
          </div>

          <div className="part mb-6">
            <h3 className="text-[#3b4a54] dark:text-white text-[18px] underline">
              Summary:
            </h3>
            <p className="text-[#3b4a54] dark:text-white text-[16px] pl-[30px]">
              As a mid-senior front-end developer with expertise in React.js and
              Next.js, I bring a wealth of experience and a proven track record
              of success in delivering cutting-edge web applications. My passion
              for technology, coupled with a strong dedication to excellence,
              allows me to thrive in fast-paced environments and tackle complex
              challenges with confidence. With a focus on innovation and
              collaboration, I am committed to driving continuous improvement
              and delivering exceptional results for clients and end-users
              alike.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
