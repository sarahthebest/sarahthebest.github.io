const Toolbox = () => {
  return (
    <article className="text-center relative bg-customBGDark dark:bg-customBG customBorder rounded container-lg mx-auto p-0 flex-column flex">
      <h2 className="w-full my-4">My toolbox</h2>
      <div className="about-me w-full dark:border-borderColor border-darkBorder border border-l-0 border-r-0">
        <div
          className="align-items-center skill relative"
          style={{ minHeight: "200px" }}
        >
          <img
            src="src\assets\img\arch.webp"
            className="absolute textDecoLeft dark:invert invert-0"
            style={{ height: "150px" }}
            alt="arch graphic facing left."
          />
          <h2 className="mx-auto cursive">UX</h2>
        </div>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="10"
          className="right-box mx-auto"
        >
          <ul className="flex-row flex flex-wrap place-content-center px-10">
            <li className="tag spanBorder rounded p-2">Figma</li>
            <li className="tag spanBorder rounded p-2">
              Adobe Illustrator
            </li>
            <li className="tag spanBorder rounded p-2">
              UX analysis
            </li>
            <li className="tag spanBorder rounded p-2">
              Prototyping
            </li>
            <li className="tag spanBorder rounded p-2">
              User interviews
            </li>
            <li className="tag spanBorder rounded p-2">
              A/B testing
            </li>
            <li className="tag spanBorder rounded p-2">
              User testing
            </li>
          </ul>
        </div>
      </div>
      <div className="about-me w-full">
        <div
          className="align-items-center skill relative"
          style={{ minHeight: "200px" }}
        >
          <img
            src="src\assets\img\archRight.webp"
            className="absolute textDeco dark:invert invert-0"
            alt="arch graphic facing right."
            style={{ height: "150px" }}
          />
          <h2 className="cursive">Frontend</h2>
        </div>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="10"
          className="right-box align-items-center"
        >
          <ul
            className="flex-row flex flex-wrap place-content-center"
            style={{ maxWidth: "400px" }}
          >
            <li className="tech ms-2 rounded flex align-items-center customBorder">
              <img
                className="techLogo"
                src="src\assets\img\icons\html.webp"
                alt="HTML logo."
              />
            </li>
            <li className="tech ms-2 rounded flex align-items-center customBorder">
              <img
                className="techLogo"
                src="src\assets\img\icons\css.webp"
                alt="CSS logo."
              />
            </li>
            <li className="tech ms-2 rounded flex align-items-center customBorder">
              <img
                className="techLogo"
                src="src\assets\img\icons\js.png"
                alt="Javascript logo."
              />
            </li>
            <li className="tech ms-2 rounded flex align-items-center customBorder">
              <img
                className="techLogo"
                src="src\assets\img\icons\react.webp"
                alt="React logo."
              />
            </li>
            <li className="tech ms-2 rounded flex align-items-center customBorder">
              <img
                className="techLogo"
                src="src\assets\img\icons\node.webp"
                alt="Node logo."
              />
            </li>
            <li className="tech ms-2 rounded flex align-items-center customBorder">
              <img
                className="techLogo"
                src="src\assets\img\icons\gh.webp"
                alt="Github logo."
              />
            </li>
            <li className="tech ms-2 rounded flex align-items-center customBorder">
              <img
                className="techLogo"
                src="src\assets\img\icons\bs.webp"
                alt="Bootstrap logo."
              />
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Toolbox;
