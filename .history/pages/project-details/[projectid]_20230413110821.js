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
import React from "react";
import { useRouter } from "next/router";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectInfo from "@/components/projects/ProjectInfo";
import ProjectRelatedProjects from "@/components/projects/ProjectRelatedProjects";
import Layout from "@/components/Layout";
import { SingleProjectProvider } from "../../context/SingleProjectContext";
import { motion } from "framer-motion";

const ProjectSingle = ({ projectId }) => {
  // const router = useRouter();

  // const [projectId, setProjectId] = React.useState(router.query.pid);

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
          <ProjectHeader pid={projectId} />
          <ProjectGallery pid={projectId} />
          <ProjectInfo pid={projectId} />
          {/* <ProjectRelatedProjects /> */}
        </SingleProjectProvider>
      </motion.div>
    </Layout>
  );
};

export const getStatgetStaticPathsicPaths = async () => {
  // You can use an API or database query to get the project IDs
  const projectIds = ["0", "1", "2"];
  const paths = projectIds.map((id) => ({
    params: { pid: id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const projectId = params?.pid;
  return {
    props: {
      projectId,
    },
  };
}
  
// export const getStaticPaths = async () => {
//   // You can use an API or database query to get the project IDs
//   const projectIds = ["0", "1", "2"];
//   const paths = projectIds.map((id) => ({
//     params: { projectId: id },
//   }));

//   return { paths, fallback: false };
// };


export default ProjectSingle;
