import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";
// import SingleProjectContext from "../../context/";

const ProjectGallery = ({ pid }) => {
  const { singleProjectData } = useContext(SingleProjectContext);
  console.log(pid);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {singleProjectData[pid].ProjectImages.map((project) => {
        return (
          <div className="mb-10 sm:mb-0" key={project.id}>
            <img
              src={project.img}
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
              alt={project.title}
              key={project.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectGallery;
