import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";

const projects = [
  {
    id: 1,
    title: "SUBSIDY REINVESTMENT AND EMPOWERMENT PROGRAMME (SURE-P) TRAINING ",
    description:
      "C-STEMP, in collaboration with the Nigerian Institute of Building (NIOB) was involved in the development of training content/materials and delivery of vocational training for over 1,000 artisans and craftsmen in the construction sector that participated in the Subsidy Reinvestment and Empowerment Programme (SURE-P) by the Federal government at the NYSC orientation camp, Kubwa, FCT in 2013.",
    date: "2013",
    partner: "Nigerian Institute of Building (NIOB)",
    url: "/project/surep1.png",
    grant: "",
  },

  {
    id: 2,
    title:
      "GEMS/DFID-FUNDED C-STEmp CONSTRUCTION SKILLS TRAINING AND EMPOWERMENT PROJECT ",
    description:
      "Conceived in January 2013, following submission of concept note to Growth & Employment in States (GEMS 2), and developed further between February and May of that year, the C-STEmp activity only took off with the commencement of training of Batch A, comprising 28 participants, in January 2015.",
    date: "2013",
    partner: "Nigerian Institute of Building (NIOB)",
    url: "/project/surep1.png",
    grant: "",
  },
];
const ProjectCard = ({
  title,
  description,
  date,
  imageUrl,
  partner,
  grant,
}) => (
  <div className="bg-white rounded-lg shadow-lg mt-10 overflow-hidden flex flex-col md:flex-row">
    <div className="relative h-0 pb-[30%] md:w-1/2">
      <Image
        src={imageUrl}
        alt={title}
        width={200}
        height={300}
        className="absolute top-0 bottom-0 left-0 right-0 m-auto"
      />
    </div>
    <div className="p-6 md:w-1/2">
      <h2 className="text-xl font-bold mb-2">
        {title} {date}
      </h2>
      <p className="text-gray-700 px-10 pb-6">{description}</p>
    </div>
  </div>
);

const Projects = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-1">
        <Head>
          <title>Projects</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center flex-1 px-10 text-center">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-8">Our Previous Projects</h1>
            <div class="w-full text-center p-4 md:p-7 flex flex-col items-center justify-center">
              <p class="w-full md:w-4/5 text-center">
                Started with the initial focus on construction skills, C-STEMP
                has carried out several projects and broadened its scope to
                include other economic sectors through several partnership
                projects.
              </p>
            </div>

            <div className="flex flex-col space-y-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  date={project.date}
                  imageUrl={project.url}
                  partner={project.partner}
                  grant={project.grant}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Projects;
