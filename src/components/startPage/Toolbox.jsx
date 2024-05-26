const Toolbox = () => {
  const ux = [
    { text: "Adobe Illustrator" },
    { text: "UX Analysis" },
    { text: "Prototyping" },
    { text: "User interviews" },
    { text: "A/B-testing" },
    { text: "User testing" },
    { text: "Wireframing" },
    { text: "UX Methods" },

  ];

  const frontend = [
    { text: "HTML 5", img: "src/assets/img/icons/html.webp" },
    { text: "CSS logo", img: "src/assets/img/icons/css.webp" },
    { text: "Javascript logo", img: "src/assets/img/icons/js.png" },
    { text: "React logo", img: "src/assets/img/icons/react.webp" },
    { text: "Node logo", img: "src/assets/img/icons/node.webp" },
    { text: "GitHub logo", img: "src/assets/img/icons/gh.webp" },
    { text: "Bootstrap Logo", img: "src/assets/img/icons/bs.webp" },
    { text: "Tailwind Logo", img: "src/assets/img/icons/tailwind.svg" },
    { text: "Docker Logo", img: "src/assets/img/icons/docker.webp" }

  ];

  return (
    <article 
    className="text-center relative bg-customBGDark dark:bg-customBG customBorder
     rounded container-lg mx-auto p-0 flex-col flex">
      <h3 className="w-full my-4">My toolbox</h3>
      <div
        className="about-me w-full dark:border-borderColor border-darkBorder 
      border border-l-0 border-r-0 flex flex-col sm:grid p-10"
      >
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
          <ul className="flex-row flex flex-wrap place-content-center sm:px-10">
            {ux.map((item, index) => (
              <li key={index} className="tag spanBorder m-1 rounded p-2">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="about-me h-full w-full flex flex-col sm:grid p-10">
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
            {frontend.map((item, index) => (
              <li key={index} className="tech bg-light/50 rounded m-1 flex align-items-center customBorder">
                <img
                  className="techLogo"
                  src={item.img}
                  alt={item.text}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Toolbox;
