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
    grant: "",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt nisi quis quam tristique, ac mollis ante iaculis. Sed non lectus non mauris malesuada venenatis sit amet ut est.",
    date: "February 2020",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt nisi quis quam tristique, ac mollis ante iaculis. Sed non lectus non mauris malesuada venenatis sit amet ut est.",
    date: "March 2020",
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
  <div className="bg-white rounded-lg shadow-lg mt-10 overflow-hidden">
    <div className="relative h-40">
      <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
    </div>
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">
        {title} {date}
      </h2>
      {/* <p className="text-gray-500 text-sm mb-4">{date}</p> */}
      <p className="text-gray-700">{description}</p>
      <p className="text-gray-700">{partner}</p>
      <p className="text-gray-700">{grant}</p>
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
            <div className="w-full text-center p-7 flex items-center justify-center">
              <p className="w-[50%] text-center">
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
