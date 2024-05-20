const Bento = () => {
  return (
    <section className="container-lg mx-auto p-0 bg-customBGDark dark:bg-customBG">
      <div className="bento col gap-x-5 gap-y-5 m-0 grid grid-cols-4 rounded customBorder">
        <div className="bento1 p-2 rounded customBorder col-span-3 text-center align-items-center">
          <h3 className="mb-4">(｀･ω･´)ﾉ</h3>
          <p className="text-wrap">
            Hello there! Im <span className="cursive">Sarah</span>, a curious UX
            developer. Currently @Jensen YH learning frontend-development and
            web security. Passionate about bold fonts, purple and flowers.
          </p>
          <p className="text-wrap">
            Currently seeking internship positions for fall 2024!
          </p>
          <a
            className="button hvr-grow-shadow customBorder rounded p-3 mt-2"
            href="src\assets\img\cv.pdf"
            target="_blank"
            role="button"
          >
            My resume
          </a>
        </div>
        <div className="bento2 rounded overflow-hidden">
          <img
            className="selfie w-full h-full"
            src="src\assets\img\selfie2.webp"
            alt="Image of a woman with shoulder length dark brown hair and glasses giving a thumbs up."
          />
        </div>
        <div className="bento3 rounded overflow-hidden"></div>
        <div className="bento4 col-span-3 text-end flex flex-column rounded overflow-hidden">
          <div className="d-flex h-full text-start col-12 flex-column">
            <h3>My process</h3>
            <div id="process" className="flex gap-3 flex-row w-full">
              <div className="col-3 rounded flex p-2 flex-column">
                <h3>01.</h3>
                <p className="cursive m-0">Research</p>
                <p className="text-center" style={{ fontSize: "4rem" }}>
                  ⌨️
                </p>
              </div>
              <div className="col-3 rounded flex p-2 flex-column">
                <h3>02.</h3>
                <p className="cursive m-0">Empathize</p>
                <p className="text-center" style={{ fontSize: "4rem" }}>
                  🤝🏻
                </p>
              </div>
              <div className="col-3 rounded flex p-2 flex-column">
                <h3>03.</h3>
                <p className="cursive m-0">Test</p>
                <p className="text-center" style={{ fontSize: "4rem" }}>
                  &#128203;
                </p>
              </div>
              <div className="col-3 rounded flex p-2 flex-column">
                <h3>04.</h3>
                <p className="cursive m-0">Develop</p>
                <p className="text-center" style={{ fontSize: "4rem" }}>
                  &#128187;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bento;
