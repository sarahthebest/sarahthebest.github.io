/* eslint-disable react/no-unescaped-entities */
import BG from "./common/Bg";
import series from "../assets/img/TVshow.webp";
import book from "../assets/img/book.webp";
import { GiPotionBall } from "react-icons/gi";

const About = () => {
    const media = {
        seriesImg: series,
        seriesAlt: "House of the Dragon season 2",
        bookImg: book,
        bookAlt: "Tomorrow, and Tomorrow, and Tomorrow - Gabrielle Zevin",
    };

    const experiences = [
        {
            company: "Mappi AI",
            role: "Frontenddeveloper intern",
            date: "2024 Nov",
            endDate: "2025 Feb",
            desc: "UX-design, React, Typescript, building components, redesigning pages.",
        },
        {
            company: "Globy AI",
            role: "Webdeveloper intern",
            date: "2024 Sep",
            endDate: "2024 Dec",
            desc: "Internship i did alongside my studies. Worked with design and new AI tools to build websites",
        },
        {
            company: "Jensen Yrkeshögskola",
            role: "Frontenddeveloper - Websecurity",
            date: "2023 Aug",
            endDate: "2025 Jun",
            desc: "React, Styling libraries and Frameworks, Backend, Cybersecurity.",
        },
        {
            company: "North Kingdom",
            role: "UX Internship",
            date: "2023 Jan",
            endDate: "2023 Mar",
            desc: "Conducted desk and user research, Created customer journeys and personas.",
        },
        {
            company: "Lines Designworks",
            role: "UX Internship",
            date: "2021 Nov",
            endDate: "2022 Apr",
            desc: "Created prototypes and wireframes, Presentation of prototype to stakeholder.",
        },
    ];

    return (
        <>
            <BG />
            <div className="p-4 pointer-events-auto grid grid-cols-5 gap-4 mt-10 rounded grid-rows-auto border customBorder bg-customBGDark dark:bg-customBG mx-auto container-lg">
                <div
                    style={{ height: "352px" }}
                    className="bento1 h-max col-span-3 sm:col-span-2 relative rounded border  customBorder text-center flex items-center justify-center"
                >
                    <h2 className="text-wrap mono transition-opacity duration-300 hover:opacity-0">
                        What I'm Watching...
                    </h2>
                    <div className="absolute inset-0 overflow-hidden flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
                        <img
                            className="img-contain"
                            src={media.seriesImg}
                            alt={media.seriesAlt}
                        />
                    </div>
                </div>

                <div className="col-span-2 h-full sm:col-span-1 rounded relative text-center flex items-center justify-center customBorder border">
                    <h2 className="text-wrap mono transition-opacity duration-300 hover:opacity-0">
                        What I'm reading...
                    </h2>
                    <div className="absolute inset-0 overflow-hidden flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
                        <img
                            className="h-full w-full"
                            src={media.bookImg}
                            alt={media.bookAlt}
                        />
                    </div>
                </div>
                <div
                    style={{
                        maxHeight: "352px",
                        minHeight: "152px",
                        height: "352px",
                    }}
                    className="bento2 col-span-5 sm:col-span-2 rounded relative text-center flex items-center justify-center"
                >
                    <iframe
                        style={{
                            maxHeight: "352px",
                            minHeight: "152px",
                            height: "352px",
                        }}
                        className="my-auto overflow-hidden"
                        src="https://open.spotify.com/embed/playlist/48HFf5IxCvxhS7x0tKCMC0?utm_source=generator&theme=0"
                        width="100%"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>

                <div
                    style={{ height: "300px" }}
                    className="col-span-5 sm:col-span-3 md:col-span-4 text-center mx-auto p-4 flex flex-col justify-center content-center rounded overflow-hidden customBorder border"
                >
                    <p className="text-wrap">
                        Welcome to the about <span className="cursive">me</span>{" "}
                        page. When I'm not in front of the computer I enjoy
                        gaming, reading, and catching up on my favorite shows. I
                        also go outside occasionally and when I do, I like to
                        appreciate the nature around me and take pictures of
                        pretty flowers.
                    </p>
                    <p>Go check out my projects!</p>
                </div>
                <div
                    style={{ height: "300px" }}
                    className="col-span-3 sm:col-span-2 md:col-span-1 rounded overflow-hidden"
                >
                    <img
                        src="/assets/img/milano.webp"
                        className="h-full w-full"
                        alt="Me in Milano in front of the Duomo."
                    />
                </div>
            </div>
            <div className="container-lg mx-auto bg-customBGDark dark:bg-customBG mt-4 customBorder rounded border">
                <div className="timeline flex flex-col md:flex-row justify-between">
                    <div className="title m-4 mb-1">
                        <h4 className="flex flex-row place-items-center gap-2">
                            {" "}
                            <GiPotionBall />
                            Experience
                        </h4>
                    </div>
                    <div className="experience flex flex-col p-6 gap-10">
                        {experiences.map((experience, index) => (
                            <div
                                key={index}
                                className="flex justify-between rounded-t-lg"
                            >
                                <div>
                                    <p className="font-bold">
                                        {experience.company}
                                    </p>
                                    <p>{experience.role}</p>
                                    <p className="text-wrap">
                                        {experience.desc}
                                    </p>
                                </div>
                                <div className="flex">
                                    <p className="text-nowrap">
                                        {experience.date} -{" "}
                                        <span className="p-2 text-indigo-100 bg-purple rounded-full hover:bg-orange hover:text-amber-200 duration-500 hover:transition-colors border customBorder">
                                            {experience.endDate}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
