import { ProjectsList } from "@/constants/projectsPage";
import MainLayout from "@/layouts/MainLayout";
import { EyeIcon } from "@heroicons/react/16/solid";

const Projects = () => {
  return (
    <MainLayout>
      <section className="pt-[40px] pb-[40px] dark:text-white">
        <div className="container flex items-center justify-center flex-wrap h-full sm:pl-[40px] sm:pr-[40px] pl-[16px] pr-[16px] gap-[18px]">
          {ProjectsList?.map((project: any, index: number)=>(
            <div key={index} className="bg-slate-200 hover:bg-gray-300 transition-all duration-[300ms] ease-in-out p-[16px] rounded-[4px] overflow-hidden relative cursor-pointer flex flex-col items-center min-w-[250px] max-w-[300px] group">
              <span className="absolute top-[10px] right-[10px] hidden group-hover:block transition-all duration-[300ms] ease-in-out">
                <EyeIcon className="size-6  dark:text-white" />
              </span>

              <div className="projectImage w-full">
                <img src={project?.images?.heroImageUrl} alt="projectImage" className="object-cover w-full rounded-[4px]" />
              </div>
              
              <div className="bg-white w-full mt-[8px] p-[4px] pl-[8px] border-l-[3px] border-[#3b4a54] rounded-[4px]">
                <h2 className="text-[16px] capitalize text-[#3b4a54]">{project?.name}</h2>
                <p className="text-[12px] text-[#3b4a54]">{project?.description}</p>
              </div>

              <div className="flex justify-start items-start gap-[8px] flex-wrap mt-[8px] w-full">
                {project?.technologies.map((technology: string, index: number)=>(
                  <h3 key={index} className="p-[4px] pl-[8px] border-l-[2px] bg-white border-green-500 rounded-[4px]">{technology}</h3>
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
