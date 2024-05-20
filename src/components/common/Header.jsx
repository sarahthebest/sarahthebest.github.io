import { useState, useEffect } from "react";

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
      <div id="headerBG" className="fixed m-0 p-0">
        <img
          src="src\assets\img\headerBG.webp"
          alt="background image"
          id="mountain"
          className="absolute h-screen z-10"
        />
        <div className="circle absolute linear z-0"></div>
      </div>
      <div className="headerBox mx-auto p-0 w-5/6 mt-4">
        <div className="scroll">
          <div className="flex mb-2 flex-row">
            <p style={{ height: "30px" }}>
              Stockholm, Sweden
              <span className="customBorder spanBorder tag rounded-full mono ml-10">
                {dateTime.toLocaleString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </span>
            </p>
            <div className="onlineBar rounded-full relative spanBorder customBorder align-items-center flex flex-row justify-content-between">
              <div className="greenCircle ms-1 rounded-full absolute start-0"></div>
              <p className="m-0 mono">Online</p>
            </div>
          </div>
          <div className="wrappertitle col ">
            <p className="mb-2 text-4xl">Sarah Emmoth is a</p>
            <div className="scroller cursive dark:border-borderColor border-darkBorder border">
              <span>
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
        <div className="rect bg-light dark:bg-bg flex align-items-center justify-content-center customBorder relative overflow-hidden mt-4">
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
            src="src\assets\img\avatar.webp"
            id="avatar"
            alt="Cartoon of myself."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
