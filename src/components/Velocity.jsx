import "../assets/css/projectStyles.css";
import BackgroundCard from "./projectPages/BackgroundCard";
import ProjectHeader from "./projectPages/ProjectHeader";
import projectData from "../assets/json/projects.json";

const Velocity = () => {
  let project = projectData.projects.find((proj) => proj.title === "Velocity");

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
              <h2 className="ms-4 cursive">.Definition</h2>
            </div>
            <p>
              We initiated the project by exploring the{" "}
              <span className="font-bold">problem space</span> and defining the
              problem.
              <br />I also wrote a project brief and formed a timeplan for the
              project.
            </p>
            <div>
              <p>
                The key challenge identified was the high barrier to entry for
                the Thai stock market, with only 3% participation. Our goal was
                to increase accessibility through a user-friendly investment
                app. The identified hurdles included: limited disposable income,
                risk aversion, lack of market knowledge, and overall financial
                insecurity due to a volatile economy.
              </p>
            </div>
          </div>
        </div>
        <div id="grid-item3" className="p-4 mx-auto flex flex-row">
          <div className="border-b-0 border-r-0 gap-3 flex flex-col border-t-0">
            <div className="title w-full flex justify-between">
              <h2 className="headline">Phase 2</h2>
              <h2 className="ms-4 cursive">.Research</h2>
            </div>
            <p>
              After understanding the problem I conducted necessary research to
              understand
              <br />
              who our <span className="font-bold">users</span> are and their
              <span className="font-bold">goals.</span>
            </p>
            <div className="competitorAnalysis gap-2 flex flex-col">
              <h3>Competitor Analysis</h3>
              <img
                src="src\assets\img\competitor.webp"
                className="object-contain"
                alt="Competitor analysis"
              />
              <p>
                A competitor analysis was made to find market gaps, current
                solutions, and weak points. For the analysis, I found a direct
                and indirect competitor.
              </p>
            </div>
            <div className="targetAudience gap-2 flex flex-col">
              <h3>Target audience</h3>
              <p>
                Understanding market demographics is key so I conducted research
                into market demographics and the current state of retail
                investors in Thailand. This is what I found:
              </p>
              <ol className="list-decimal px-4 text-lg">
                <li>
                  Millennials account for more than half of retail investors and
                  Gen Z accounts for 24%
                </li>
                <li>
                  Across both generations over the internet is the preferred way
                  to trade.
                </li>
                <li>
                  Millennials are risk averse compared to Gen Z. Financial
                  insecurity is high across millennials and Gen Z in Bangkok due
                  to rising cost of living and tumultus economy.
                </li>
              </ol>
              <p>
                With these, in mind, I constructed two proto- personas based on
                the millennial day trader and the newer Gen z trader.
              </p>
              <div className="personas gap-4 flex flex-col sm:flex-row w-full">
                <img
                  src="src\assets\img\persona-trader.webp"
                  className="w-5/12"
                  alt="Persona of an experienced trader."
                />
                <img
                  src="src\assets\img\Persona-new.webp"
                  className="w-5/12"
                  alt="Persona of a new trader."
                />
              </div>
              <div className="notes">
                <h4>Notes</h4>
                <ol className="list-decimal px-4 text-lg">
                  <li>
                    Lack of knowledge seems to be the biggest challenge. Most
                    Thais don't partake in trading because they lack knowledge
                    of the stock market and view it as risky.
                  </li>
                  <li>
                    used ​​​"The 2021 Household Socio-Economic Survey" from the
                    National Statistical Office. The Stock Exchange of Thailand
                    has yearly papers with market statistics and demographics
                    that I used.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div id="grid-item4" className="p-4 mx-auto flex flex-row">
          <div className="border-b-0 border-r-0 gap-3 flex flex-col border-t-0">
            <div className="title w-full flex justify-between">
              <h2 className="headline">Phase 3</h2>
              <h2 className="ms-4 cursive">.Ideation</h2>
            </div>
            <p>
              After establishing the problem and carving out potential users I
              began <br /> to work on the
              <span className="font-bold">design</span> of the app and the user
              journey.
            </p>
            <div>
              <h3>Userflows and paper wireframes.</h3>
              <p>
                The key challenge identified was the high barrier to entry for
                the Thai stock market, with only 3% participation. Our goal was
                to increase accessibility through a user-friendly investment
                app. The identified hurdles included: limited disposable income,
                risk aversion, lack of market knowledge, and overall financial
                insecurity due to a volatile economy.
              </p>
              <div className="gallery mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full place-content-center">
                <img
                  src="src\assets\img\Lofi-home-1.webp"
                  className="frame"
                  alt="Lofi prototype of the app homescreen"
                />
                <img
                  src="src\assets\img\Lofi-home-2.webp"
                  className="frame"
                  alt="Lofi prototype of the app homescreen subsection achievemnts."
                />
                <img
                  src="src\assets\img\Lofi-home.webp"
                  className="frame"
                  alt="Lofi prototype of the app homescreen subsection goals."
                />
                <img
                  src="src\assets\img\Lofi-portfolio-1.webp"
                  className="frame"
                  alt="Lofi prototype of the app orders."
                />
                <img
                  src="src\assets\img\Lofi-portfolio.webp"
                  className="frame"
                  alt="Lofi prototype of the app portfolio."
                />
                <img
                  src="src\assets\img\Lofi-stock.webp"
                  className="frame"
                  alt="Lofi prototype of the screen of a stock."
                />
                <img
                  src="src\assets\img\lofi-stock2.webp"
                  className="frame"
                  alt="Lofi prototype of buying a stock."
                />
              </div>
            </div>
          </div>
        </div>
        <div id="grid-item5" className="p-4 mx-auto flex flex-row">
          <div className="border-b-0 border-r-0 gap-3 flex flex-col border-t-0">
            <div className="title w-full flex justify-between">
              <h2 className="headline">Phase 4</h2>
              <h2 className="ms-4 cursive">.Prototyping</h2>
            </div>
            <p>
              A prototype was made in Figma. Due to the time constraints i was
              able to only complete two screens.
            </p>
            <h3>Homescreen</h3>
            <p>
              The user is greeted by current positions and balance. I opted to
              move the secondary navigation to the top. I received feedback that
              the navigation cut off the screen weirdly in the middle and was
              distracting. I also decided to add more information in the form of
              cards showing current indexes. A graph was added to showcase user
              balance journey/history.
            </p>
            <div className="homescreen w-max gap-4 grid grid-cols-2 place-content-center content-center gap-10">
              <img
                src="src\assets\img\Lofi-home-1.webp"
                className="frame h-96"
                alt="Lofi view of the home screen."
              />
              <img
                src="src\assets\img\Homescreen.webp"
                className="frame h-96"
                alt="Hifi version."
              />
            </div>
            <h3>Stockscreen</h3>
            <p>
              The stock screen remains mostly unchanged. The user is greeted by
              current positions and numbers. This screen was the biggest
              challenge for me as I had to cram in so much information onto one
              screen while still keeping everything legible and not overwhelm
              the user.
            </p>
            <div className="homescreen w-max gap-4 grid grid-cols-2 place-content-center content-center">
              <img
                src="src\assets\img\Lofi-stock.webp"
                className="frame h-96"
                alt="Lofi view of the stock screen"
              />
              <img
                src="src\assets\img\src\assets\img\stockscreen.webp"
                className="frame h-96"
                alt="Hifi version"
              />
            </div>
          </div>
        </div>
        <div id="grid-item6" className="p-4 mx-auto flex flex-row pb-10">
          <div className="border-b-0 border-r-0 gap-3 flex flex-col border-t-0">
            <div className="title w-full flex justify-between">
              <h2 className="headline">Results!</h2>
            </div>
            <ul className="text-lg gap-4 flex flex-col">
              <li>
                🚀 By the end of my internship, all of the work and resources
                were handed over to my supervisors and they are currently
                working on this project. If I had more time the next step would
                have been to fully complete the prototype in Figma and then
                conduct usability tests.
              </li>
              <li>
                💬 The lack of user and stakeholder involvement was an issue for
                me throughout the project. I had to hypothesize and come to a
                lot of conclusions on my own which was difficult. If I could I
                would have liked to have interviews and some usability testing
                of wireframes.
              </li>
              <li>
                ✨ Overall though as my first ever real project I learned a lot
                from this project and am grateful to my supervisors for taking
                me in and supporting me!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Velocity;
