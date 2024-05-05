"use client"
import { ProjectsList } from "@/constants/projectsPage";
import MainLayout from "@/layouts/MainLayout";
import { EyeIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

const Projects = () => {
  const router = useRouter();

  const handleClickOnProjectCard = (projectId: string) => {
    router.push(`/projects/${projectId}`, {scroll: false});
  };

  return (
    <MainLayout>
      <section className="pt-[40px] pb-[40px] dark:text-white">
        <div className="container flex items-center justify-center flex-wrap h-full sm:pl-[40px] sm:pr-[40px] pl-[16px] pr-[16px] gap-[18px]">
          {ProjectsList?.map((project: any, index: number)=>(
            <div key={index} onClick={()=>{handleClickOnProjectCard(project?.id)}} className="bg-slate-200 hover:bg-gray-300 dark:bg-[#263c4f] dark:hover:bg-[#223647] transition-all duration-[300ms] ease-in-out p-[16px] rounded-[4px] overflow-hidden relative cursor-pointer flex flex-col items-center min-w-[250px] max-w-[300px] group">
              <span className="absolute top-[10px] right-[10px] hidden group-hover:block transition-all duration-[300ms] ease-in-out rounded-[50%] bg-[#00000027]">
                <EyeIcon className="size-6  dark:text-white" />
              </span>

              <div className="projectImage w-full">
                <img src={project?.images?.heroImageUrl} alt="projectImage" className="object-cover w-full rounded-[4px]" />
              </div>
              
              <div className="bg-white w-full mt-[8px] p-[4px] pl-[8px] border-l-[3px] border-[#3b4a54] rounded-[4px] dark:bg-[#192734] dark:border-white">
                <h2 className="text-[16px] capitalize text-[#3b4a54] dark:text-white">{project?.name}</h2>
                <p className="text-[12px] text-[#3b4a54] dark:text-white ">{project?.description}</p>
              </div>

              <div className="flex justify-start items-start gap-[8px] flex-wrap mt-[8px] w-full">
                {project?.technologies.map((technology: string, index: number)=>(
                  <h3 key={index} className="p-[4px] pl-[8px] border-l-[2px] bg-white text-[#192734] border-[#192734] rounded-[4px] dark:border-white dark:bg-[#192734] dark:text-white">{technology}</h3>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Projects;
