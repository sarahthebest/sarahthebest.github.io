/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import projectData from "../../assets/json/projects.json";
import FadeIn from "../common/FadeIn";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { GoArrowDown } from "react-icons/go";

const Cases = () => {
  let projects = projectData.projects;

  return (
    <>
      <section
        id="projects"
        className="position-relative mt-14 bg-customBGDark dark:bg-customBG rounded projects
        customBorder border overflow-hidden container-lg mx-auto p-0 flex-column d-flex"
      >
        <div className="projects text-center my-5">
          <h3 className="mb-3">What i've been up to</h3>
          <GoArrowDown className="mx-auto hvr-float" size={90}/>
        </div>
        {projects.map((project, index) => (
          <Link key={index} className="linkUnstyled" to={project.link}>
            <FadeIn
              selector="case m-0 p-0 dark:border-borderColor border-darkBorder 
       border border-l-0 border-r-0 border-b-0 fade-in-section"
            >
              <div
                className="align-items-center overflow-hidden"
                style={{ height: "300px" }}
              >
                <img
                  className="w-full object-contain"
                  src={project.thumbnail}
                  alt={project.imgAlt}
                />
              </div>
              <div className="flex2 p-0 text-center">
                <div className="iconWrapper p-3 w-full justify-end flex">
                <IconContext.Provider value={{ className: "linkIcon" }}>
                  <FaExternalLinkAlt />
                  </IconContext.Provider>
                </div>
                <div className="proj p-3 d-flex gap-2 flex-column align-items-center">
                  <h2 className="cursive">{project.title}</h2>
                  <p>{project.description}</p>
                  <p>
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="spanBorder ms-1 rounded-full p-2 tag"
                      >
                        {tag}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </FadeIn>
          </Link>
        ))}
        <div
          className="rounded-bottom col-12 m-0 p-0 position-relative align-items-center teaser
          dark:border-borderColor border-darkBorder border border-l-0 border-r-0 border-b-0"
        >
          <p>Stay tuned for more...</p>
        </div>
      </section>
    </>
  );
};

export default Cases;
