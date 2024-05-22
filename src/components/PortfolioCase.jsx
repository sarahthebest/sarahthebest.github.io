/* eslint-disable react/no-unescaped-entities */
import "../assets/css/projectStyles.css";
import BackgroundCard from "./projectPages/BackgroundCard";
import ProjectHeader from "./projectPages/ProjectHeader";
import projectData from "../assets/json/projects.json";

const PortfolioCase = () => {
  let project = projectData.projects.find(
    (proj) => proj.title === "Portfolio Redesign"
  );

  return (
    <>
      <div className="m-0 p-0 fixed" id="headerBG">
        <div className="circle2 -ml-96 absolute linear start-0 top-0"></div>
        <div className="circle3 -mr-96 absolute end-0 top-0 linear"></div>
      </div>
      <ProjectHeader project={project} />
      <BackgroundCard project={project} />
      <div
        className="grid-container overflow-hidden customBorder text-wrap px-4 bg-customBGDark dark:bg-customBG
       mt-4 rounded container-lg auto-rows-auto grid-cols-1 grid mx-auto rounded-bottom"
      >
        <div id="grid-item2" className="p-4 mx-auto flex flex-row">
          <div className="border-b-0 border-r-0 gap-3 flex flex-col border-t-0">
            <div className="title w-full flex justify-between">
              <h2 className="headline">Phase 1</h2>
              <h2 className="ms-4 cursive">.Ideation</h2>
            </div>
            <p>
              I built my previous portfolio during a two-and-a-half year UX
              program with vanilla html/css and while functional it wasn't very
              dynamic or interesting. Now equipped with much more frontend
              skills I wanted to give my portfolio a big refurbishing.
            </p>
            <div
              className="imgContainer overflow-y-scroll"
              style={{ height: "500px" }}
            >
              <img src="src\assets\img\thumbnails\portfolio.webp" alt="" />
            </div>
            <p>Flashback to my old portfolio.</p>
            <p>
              It was time to bid farewell to the old and usher in the new.
              Aligning my digital presence with my personal style and{" "}
              <span className="cursive">essence. </span>
              Certain elements like color and bold typography stayed but i
              wanted to add more dynamic content and subtle animations.
            </p>
          </div>
        </div>
        <div id="grid-item3" className="p-4 mx-auto flex flex-row">
          <div className="border-b-0 border-r-0 gap-3 flex flex-col border-t-0">
            <div className="title w-full flex justify-between">
              <h2 className="headline">Phase 2</h2>
              <h2 className="ms-4 cursive">.Action!</h2>
            </div>
            <p>
              I decided to embrace Bootstrap for my portfolio redesign. It
              seemed like the perfect toolkit to enhance responsiveness which
              was a issue in my previous portfolio. Bootstrap's utility classes
              and components made it easy for me to style my html document and
              minimize the amount of code needed in my CSS files.
            </p>
            <img
              src="src\assets\img\snippet.webp"
              className="w-5/6 mx-auto"
              alt="Code snippet"
            />
            <p>
              Stepping outside the realm of frameworks, I dived into the
              exciting world of design possibilities. I wanted to strike a
              balance between keeping some stuff from my old portfolio, like the
              bright color schemes and bold fonts and tossing in new elements,
              like dynamic content and subtle animations.
            </p>
          </div>
        </div>
        <div id="grid-item3" className="p-4 mx-auto flex flex-row">
          <div className="border-b-0 border-r-0 gap-3 flex flex-col border-t-0">
            <div className="title w-full flex justify-between">
              <h2 className="headline">Phase 3</h2>
              <h2 className="ms-4 cursive">.Toolbox</h2>
            </div>
            <p>
              Since enrolling in my program i had gotten a much firmer grasp of
              html, css, javascript and Bootstrap so i sought to utilize these
              when redesigning my portfolio.
            </p>
            <p>Technologies used:</p>
            <ul className="list-disc px-3">
              <li>VScode for code editor.</li>
              <li>Bootstrap framework.</li>
              <li>Github for version management and pages hosting.</li>
              <li>Figma and Adobe Illustrator for creating graphic assets.</li>
            </ul>
            <p>
              With this toolset i was able to deliver a visually dynamic website
              that properly showcased who I am.
            </p>
          </div>
        </div>
        <div id="grid-item3" className="p-4 mx-auto flex flex-row">
          <div className="border-b-0 border-r-0 gap-3 flex flex-col border-t-0">
            <div className="title w-full flex justify-between">
              <h2 className="headline">Phase 4</h2>
              <h2 className="ms-4 cursive">.Setbacks</h2>
            </div>
            <h3>ChatGPT - My...saviour?</h3>
            <p>
              Despite these challenges, each setback taught me something new and
              further propelled my skills. ChatGPT was a big help throughout the
              entire process and ChatGPT served as a technical mentor when i was
              unsure of how to solve a problem eg. how to implement
              responsiveness in my website it offered sound advice that made the
              task less daunting.
            </p>
            <img
              src="src\assets\img\gpt.webp"
              className="w-3/6 mx-auto"
              alt="Graphic of me asking chat gpt for help in my darkest hours and moments..."
            />
          </div>
        </div>
        <div id="grid-item4" className="p-4 pb-10 mx-auto flex flex-row">
          <div className="text-center gap-3 flex flex-col">
            <h2 className="headline">Completion</h2>
            <p>
              Enrolling in the frontend program in the autumn of 2023 marked the
              beginning of this dev journey. The mission was simple: redesign my
              portfolio to not just showcase technical skills but to be a
              reflection of my growth and evolving style. What's next? to delve
              deeper into web-development and learn more!
            </p>
            <p>
              Current pagespeed results for desktop, mobile results are still
              iffy and are to be optimized.
            </p>
            <img
              src="src\assets\img\pagespeed.png"
              className="w-5/6 mx-auto"
              alt="Screenshot of my pagespeed results."
            />
            <p>
              Moving forward this portfolio will be maintained and updated for
              the foreseeable future so stay tuned for more projects 😉
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCase;
