import projectData from "../../assets/json/projects.json";
import FadeIn from "../common/FadeIn";

const Cases = () => {
  let projects = projectData.projects;

  return (
    <>
      <section
        id="projects"
        className="position-relative mt-14 bg-customBGDark dark:bg-customBG rounded projects
        customBorder overflow-hidden container-lg mx-auto p-0 flex-column d-flex"
      >
        <div className="projects text-center my-5">
          <h3 className="mb-3">What i've been up to</h3>
          <img
            className="dark:invert invert-0 img-fluid hvr-float"
            src="src\assets\img\Arrow.webp"
            alt="arrow pointing down."
          />
        </div>
        {projects.map((project, index) => (
          <a key={index} className="linkUnstyled" href={project.link}>
            <FadeIn selector="case m-0 p-0 dark:border-borderColor border-darkBorder 
       border border-l-0 border-r-0 border-b-0 fade-in-section"
            >
              <div
                className="align-items-center overflow-y-scroll"
                style={{ height: "300px" }}
              >
                <img
                  className="w-full"
                  src={project.thumbnail}
                  alt={project.imgAlt}
                />
              </div>
              <div className="flex2 p-0 align-items-center text-center">
                <div className="proj p-3 d-flex gap-2 flex-column align-items-center h-96">
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
          </a>
        ))}
        <FadeIn selector="rounded-bottom col-12 m-0 p-0 position-relative align-items-center teaser
          dark:border-borderColor border-darkBorder border border-l-0 border-r-0 border-b-0 fade-in-section"
        >
          <p>Stay tuned for more...</p>
        </FadeIn>
      </section>
    </>
  );
};

export default Cases;
