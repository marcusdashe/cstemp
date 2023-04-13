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

export async function getStaticPaths() {
  // You can use an API or database query to get the project IDs
  return {
    paths: [
      { params: { projectId: "0" } },
      { params: { projectId: "1" } },
      { params: { projectId: "2" } },
    ],

    fallback: false, // can also be true or 'blocking'
  };
}

export default ProjectSingle;
