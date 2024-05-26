const Footer = () => {
  return (
    <section className="m-0 mt-14 container-lg mx-auto p-0 flex-column flex">
      <footer className="border-bottom-0 relative rounded-t bg-customBGDark dark:bg-customBG customBorder w-full">
          <div className="contact p-4">
            <h2 style={{fontSize: '2.5rem'}} className="headline">Want to chat?</h2>
            <div className="flex flex-row justify-content-between">
            <a
              className="cursive chat text-dark dark:text-light"
              href="mailto:sarah.emmoth@gmail.com"
            >
              Get in touch!
            </a>
            <img
              className="footerArrow ms-2 mt-4 dark:invert invert-0"
              src="src\assets\img\arrowRight.webp"
              alt="arrow pointing downward left"
            />
          </div>
        </div>
        <div className="w-full">
          <p className="bottom-2 m-0 px-4 absolute">
            © 2023 Sarah Emmoth - <span className="mono"> Crafted with ❤️</span>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
