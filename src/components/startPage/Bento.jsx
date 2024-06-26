/* eslint-disable react/no-unescaped-entities */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Bento = () => {
  const ghProj = [
    {
      img: "./img/thumbnails/auctioneer.webp",
      desc: "Live auction website built in React using finished API.",
      link: "https://github.com/sarahthebest/auctioneer",
    },
    {
      img: "./img/thumbnails/auctioneer.webp",
      desc: "Recipe website where users can search and find recipes.",
      link: "https://github.com/sarahthebest/Recipefetcher",
    },
    {
      img: "./img/thumbnails/webshop.png",
      desc: "Webshop built in React with Tailwind.",
      link: "https://github.com/sarahthebest/webShop",
    },
  ];

  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="container-lg mx-auto p-0 bg-customBGDark dark:bg-customBG">
      <div className="p-4 h-fit grid grid-cols-4 grid-rows-3 sm:grid-rows-2 gap-4 rounded customBorder my">
        <div className="col-span-4 sm:col-span-3 p-2 text-center rounded customBorder align-items-center">
          <h3 className="mb-4">(｀･ω･´)ﾉ</h3>
          <p>
            Hello there! I'm <span className="cursive">Sarah</span>, a curious
            UX developer. Currently @Jensen YH learning frontend-development and
            web security. Passionate about bold fonts, purple, and flowers.
          </p>
          <p>Currently seeking internship positions for fall 2024!</p>
          <a
            className="button hvr-grow-shadow customBorder rounded p-3 mt-2 dark:bg-dark bg-light"
            href="./img/CV.pdf"
            target="_blank"
            role="button"
          >
            My resume
          </a>
        </div>
        <div className="bento2 col-span-2 sm:col-span-1 rounded overflow-hidden">
          <img
            className="selfie w-full h-full"
            src="./img/selfie2.webp"
            alt="Image of a woman with shoulder-length dark brown hair and glasses giving a thumbs up."
          />
        </div>
        <div className="bento3 col-span-2 rounded overflow-hidden"></div>
        <div className="bento4 col-span-4 sm:col-span-2 overflow-hidden">
          <div
            style={{ maxHeight: "280px" }}
            className="slider-container rounded h-full overflow-hidden align-items-center"
          >
            <Slider className="w-5/6 mx-auto" {...settings}>
              {ghProj.map((project, index) => (
                <div className="text-center" key={index}>
                  <p>{project.desc}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.img}
                      className="mx-auto rounded mt-1"
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
