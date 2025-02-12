/* eslint-disable react/no-unescaped-entities */
import BackgroundCard from "./projectPages/BackgroundCard";
import ProjectHeader from "./projectPages/ProjectHeader";
import projectData from "../assets/json/projects.json";
import ProjectBG from "./projectPages/ProjectBG";
import FadeIn from "./common/FadeIn";

const PortfolioCase = () => {
  let project = projectData.projects.find(
    (proj) => proj.title === "Portfolio Redesign"
  );

  return (
    <>
      <ProjectBG />
      <ProjectHeader project={project} />
      <BackgroundCard project={project} />
      <div
        className="grid-container text-wrap gap-y-20 px-4 xl:px-0
       mt-10 rounded container-lg auto-rows-auto grid-cols-1 grid mx-auto rounded-bottom"
      >
        <FadeIn selector="grid-item1 mx-auto flex flex-row fade-in-section">
          <div className="gap-3 flex flex-col">
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
              <img src="/img/thumbnails\portfolio.webp" alt="" />
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
        </FadeIn>

        <FadeIn selector="grid-item2 mx-auto flex flex-row fade-in-section">
          <div className="gap-3 flex flex-col">
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
              src="/img/snippet.webp"
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
        </FadeIn>
        <FadeIn selector="grid-item3 mx-auto flex flex-row fade-in-section">
          <div className="gap-3 flex flex-col">
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
        </FadeIn>
        <FadeIn selector="grid-item4 mx-auto flex flex-row fade-in-section">
          <div className="gap-3 flex flex-col">
            <div className="title w-full flex justify-between">
              <h2 className="headline">Phase 4</h2>
              <h2 className="ms-4 cursive">.Setbacks</h2>
            </div>
            <div className="problems flex flex-col gap-4">
              <h4>Using Github</h4>
              <p>
                I decided to use GitHub to host and manage my portfolio. I had
                very little experience with GitHub prior to enrolling in my
                program but i caught on fairly quick. I also discovered GitHub
                Pages and decided to host my portfolio there.
              </p>
              <h4>Using Bootstrap</h4>
              <p>
                I made the executive decision to use Bootstrap 5 for this
                project. It made the issue of responsiveness much easier to
                tackle and lessened the amount of CSS lines needed to execute my
                vision. Bootstrap came with its own issues though that i wasn't
                entirely equipped to solve on my own which made me rely on
                google and chat-gpt a lot. One issue was the Bootstrap default
                styles. Eg. wanting to override a bs default background-color
                was a bit tricky for me but i solved it by adding a id tag to
                body so it made my selectors more specific.
              </p>
              <h4>Website Performance</h4>
              <p>
                Later in development i decided to analyze how my website
                performed in terms of speed, accessibility and best practices
                using PageSpeed. I discovered that the header image i used was
                VERY slow to load in fact none of my images were optimized or
                responsive and THAT was a problem. I decided to convert all of
                my images into next-gen format webp,I reviewed all the
                recommendations from PageSpeed and made the necessary
                adjustments accordingly.
              </p>
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
              src="/img/gpt.webp"
              className="w-3/6"
              alt="Graphic of me asking chat gpt for help in my darkest hours and moments..."
            />
          </div>
        </FadeIn>
        <FadeIn selector="grid-item5 mx-auto flex flex-row fade-in-section">
          <div className="gap-3 flex flex-col">
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
              src="/img/pagespeed.png"
              className="w-5/6"
              alt="Screenshot of my pagespeed results."
            />
            <p>
              Moving forward this portfolio will be maintained and updated for
              the foreseeable future so stay tuned for more projects 😉
            </p>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default PortfolioCase;
