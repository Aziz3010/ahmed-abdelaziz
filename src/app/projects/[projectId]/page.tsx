"use client"
import { ProjectsList } from "@/constants/projectsPage"
import MainLayout from "@/layouts/MainLayout"
import { useRouter } from "next/navigation";

const ProjectId = ({ params }: { params: { projectId: string } }) => {
  const router = useRouter();
  const selectedProject: any = ProjectsList?.filter((prod) => prod?.id === params?.projectId)[0];

  const handleBackToProjects = () => {
    router.push(`/projects`, {scroll: false});
  };

  return (
    <MainLayout>
      <section className="pt-[40px] pb-[40px] dark:text-white">
        <div className="container flex justify-start flex-wrap h-full sm:pl-[40px] sm:pr-[40px] pl-[16px] pr-[16px] gap-[24px]">

          <div className="projectImages sm:flex-1 w-full">

            <div className="heroImage mb-[24px]">
              <img src={selectedProject?.images?.heroImageUrl} alt="image" className="rounded-[4px] object-cover" />
            </div>

            <div className="images w-full flex flex-row items-center justify-start gap-[8px]">
              {selectedProject?.images?.images?.map((imageUrl: string, index: number) => (
                <img src={imageUrl} key={index} alt="image" className="w-[80px] h-[80px] rounded-[4px] overflow-hidden object-cover" />
              ))}
            </div>

          </div>

          <div className="projectInfo sm:flex-1 w-full">
            <h1 className="mb-[24px] text-[#3b4a54] dark:text-white text-[16px]">{selectedProject?.name}</h1>
            <h2 className="text-[14px] text-[#3b4a54] dark:text-white">{selectedProject?.description}</h2>

            <div className="w-full">
              <button className="w-full bg-[#192734] dark:bg-white dark:text-[#192734] dark:hover:bg-[#ffffffba] text-white text-[14px] text-center border-none outline-none mt-[24px] p-[8px] rounded-[4px] hover:bg-[#1f3141] capitalize transition-all ease-in-out duration-[300ms]" onClick={()=>{handleBackToProjects()}}>back to projects</button>
            </div>

          </div>

        </div>
      </section>
    </MainLayout>
  )
}

export default ProjectId