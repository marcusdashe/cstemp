// export default Projects;
// import Layout from "@/components/Layout";
// import ProjectGallery from "../components/projects/ProjectGallery";
// import ProjectHeader from "../components/projects/ProjectHeader";
// import ProjectInfo from "../components/projects/ProjectInfo";
// import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects";
// import { SingleProjectProvider } from "../context/SingleProjectContext";
// import { motion } from "framer-motion";

// const Projects = () => {
//   return (
//     <Layout>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1, delay: 1 }}
//         transition={{
//           ease: "easeInOut",
//           duration: 0.6,
//           delay: 0.15,
//         }}
//         className="container mx-auto mt-5 sm:mt-10"
//       >
//         <SingleProjectProvider>
//           <ProjectHeader />
//           <ProjectGallery />
//           <ProjectInfo />
//           <ProjectRelatedProjects />
//         </SingleProjectProvider>
//       </motion.div>
//     </Layout>
//   );
// };

import { useRouter } from "next/router";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectInfo from "@/components/projects/ProjectInfo";
import ProjectRelatedProjects from "@/components/projects/ProjectRelatedProjects";
import Layout from "@/components/Layout";
import { SingleProjectProvider } from "../../context/SingleProjectContext";
import { motion } from "framer-motion";

import { getStaticPaths, getStaticProps } from "next";

export const getStaticPaths = async () => {
  // Fetch a list of all project IDs from an API or database
  // const projectIds = await fetch("https://example.com/api/projects")
  //   .then((res) => res.json())
  //   .then((projects) => projects.map((project) => project.projectId));

  const router = useRouter();
  const { projectId } = router.query;
  const projectIds = [projectId];
  // Return an array of objects with the `params` key, which
  // contains the dynamic route parameter (in this case, `projectId`)
  const paths = projectIds.map((projectId) => ({
    params: { projectId: projectId.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  // Fetch the project data for the given projectId
  const pid = params.projectId;

  return {
    props: { pid },
  };
};

const ProjectSingle = ({ pid }) => {
  // const router = useRouter();
  // const { projectId } = router.query;

  console.log(projectId);
  console.log(router);
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.6,
          delay: 0.15,
        }}
        className="container mx-auto mt-5 sm:mt-10"
      >
        <SingleProjectProvider>
          <ProjectHeader pid={pid} />
          <ProjectGallery pid={pid} />
          <ProjectInfo pid={pid} />
          {/* <ProjectRelatedProjects /> */}
        </SingleProjectProvider>
      </motion.div>
    </Layout>
  );
};

export default ProjectSingle;
