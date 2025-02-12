import { useState, useEffect } from "react";
import BG from "./Bg";

const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="header w-full h-screen relative overflow-hidden">
      <BG />
      <div className="headerBox flex flex-col mx-auto p-0 mt-16 items-center sm:items-start sm:w-5/6">
        <div className="scroll flex flex-col items-center sm:items-start">
          <div className="flex mb-2 flex-row h-min">
            <p style={{ height: "30px" }}>
              Stockholm, Sweden
              <span className="customBorder spanBorder ms-2 px-2 py-1 tag rounded-full mono ml-10">
                {dateTime.toLocaleString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </span>
            </p>
            <div className="onlineBar ms-0 rounded-full relative spanBorder customBorder align-items-center flex flex-row justify-content-between">
              <div className="greenCircle ms-1 rounded-full absolute start-0"></div>
              <p className="m-0 mono">Online</p>
            </div>
          </div>
          <div className="wrappertitle flex flex-col gap-2">
            <p className="mt-2 text-4xl">Sarah Emmoth is a</p>
            <div className="scroller cursive dark:border-borderColor border-darkBorder border">
              <span
                className="bg-gradient-to-r to-purple from-orange
               inline-block text-transparent bg-clip-text"
              >
                Web developer.
                <br />
                UX designer.
                <br />
                Problemsolver.
                <br />
                Philosopher.
              </span>
            </div>
          </div>
        </div>
        <div className="rect bg-light dark:bg-bg flex align-items-center justify-center customBorder relative overflow-hidden mt-4">
          <p
            style={{ filter: "blur(2px)" }}
            className="position-absolute text-center text-base leading-5"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            similique eum delectus aut aperiam dolorum facere, autem inventore
            sit dignissimos numquam aliquam quas laudantium voluptates? Expedita
            deleniti eligendi totam nisi! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Eligendi aliquid similique quam veniam
            rem nam, ipsam libero! Ducimus, saepe quia. Autem ipsum maiores test
            laudantium cupiditate eaque quis est voluptates nam!Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Eligendi aliquid
            similique quam veniam rem nam, ipsam libero! Ducimus, saepe quia.
            Autem ipsum maiores test laudantium cupiditate eaque quis est
            voluptates nam!Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Eligendi aliquid similique quam veniam rem nam, ipsam libero!
            Ducimus, saepe quia. Autem ipsum maiores test laudantium cupiditate
            eaque quis est voluptates nam!
          </p>
          <div className="cardHole bg-light dark:bg-bg customBorder m-1 p-2 rounded-full absolute top-0 start-0"></div>
          <img
            className="absolute top-0"
            src="./assets/img/avatar.webp"
            id="avatar"
            alt="Cartoon of myself."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
