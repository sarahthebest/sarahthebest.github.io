import Slider from "react-slick";

const Bento = () => {
  const ghProj = [
    {
      img: "src/assets/img/thumbnails/Auctioneer.webp",
      desc: "Live auction website built in React using finished API. Group Project.",
      link: "https://github.com/sarahthebest/auctioneer",
    },
    {
      img: "src/assets/img/thumbnails/recipeFetcher.webp",
      desc: "Recipe website where users can search and find recipes. School project.",
      link: "https://github.com/sarahthebest/Recipefetcher",
    },
    {
      img: "src/assets/img/thumbnails/webshop.webp",
      desc: "Webshop built in React with FakeStoreAPI",
      link: "",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="container-lg mx-auto p-0 bg-customBGDark dark:bg-customBG">
      <div className="bento grid grid-cols-4 grid-rows-3 sm:grid-rows-2 gap-4 rounded customBorder my">
        <div className="bento1 col-span-4 sm:col-span-3 p-2 text-center rounded customBorder align-items-center">
          <h3 className="mb-4">(｀･ω･´)ﾉ</h3>
          <p>
            Hello there! I'm <span className="cursive">Sarah</span>, a curious
            UX developer. Currently @Jensen YH learning frontend-development and
            web security. Passionate about bold fonts, purple, and flowers.
          </p>
          <p>Currently seeking internship positions for fall 2024!</p>
          <a
            className="button hvr-grow-shadow customBorder rounded p-3 mt-2 
          dark:bg-dark bg-light"
            href="src/assets/img/cv.pdf"
            target="_blank"
            role="button"
          >
            My resume
          </a>
        </div>
        <div className="bento2 col-span-2 sm:col-span-1 rounded overflow-hidden">
          <img
            className="selfie w-full h-full"
            src="src/assets/img/selfie2.webp"
            alt="Image of a woman with shoulder-length dark brown hair and glasses giving a thumbs up."
          />
        </div>
        <div className="bento3 col-span-2 rounded overflow-hidden"></div>
        <div className="bento4 col-span-4 sm:col-span-2 rounded overflow-hidden">
          <div className="h-full text-start">
            <h3 className="mono">GitHub highlights:</h3>
            <Slider className="carousel mx-auto relative bg-grey-900 rounded overflow-hidden">
              {ghProj.map((project, index) => (
                <div key={index} className="flex flex-col h-full relative">
                  <a href={project.link} target="_blank">
                    <img
                      src={project.img}
                      className="w-full object-fill mx-auto"
                      alt={project.desc}
                    />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bento;
