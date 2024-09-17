import { GoArrowDownLeft } from "react-icons/go";

const Footer = () => {
  return (
    <section className="m-0 mt-14 container-lg mx-auto p-0 flex-column flex">
      <footer className="border-bottom-0 relative rounded-t w-full px-4 lg:px-0">
          <div className="contact">
            <h2 style={{fontSize: '2.5rem'}} className="headline text-blur w-fit">Want to chat?</h2>
            <div className="flex flex-row justify-content-between">
            <a
              className="cursive text-blur chat flex flex-row items-center gap-1 hover:underline"
              href="mailto:sarah.emmoth@gmail.com"
            >
              Get in touch! <GoArrowDownLeft />
            </a>
          </div>
        </div>
        <div className="w-full">
          <p className="bottom-2 m-0 absolute text-blur">
            © 2023 Sarah Emmoth - <span className="mono"> Crafted with ❤️</span>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
