/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";

const Bento = () => {
    const [latestCommit, setLatestCommit] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchContributionsFromAPI() {
            try {
                const response = await fetch(
                    "src/assets/json/contributions.json"
                );
                const result = await response.json();
                const latestCommit = result.latest_commit; // Assuming this matches your JSON structure
                setLatestCommit(latestCommit);
            } catch (error) {
                console.error("Failed to fetch contributions:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchContributionsFromAPI();
    }, []);

    return (
        <section className="container-lg mx-auto p-0 bg-customBGDark dark:bg-customBG">
            <div className="p-4 h-fit grid grid-cols-4 grid-rows-3 sm:grid-rows-2 gap-4 rounded customBorder my">
                <div className="col-span-4 sm:col-span-3 p-2 text-center rounded customBorder align-items-center">
                    <h3 className="mb-4">(｀･ω･´)ﾉ</h3>
                    <p>
                        Hello there! I'm <span className="cursive">Sarah</span>,
                        a curious UX developer. Currently @Jensen YH learning
                        frontend-development and web security. Passionate about
                        bold fonts, purple, and flowers.
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
                        className="selfie w-full h-full object-cover"
                        src="./img/selfie.webp"
                        alt="Selfie"
                    />
                </div>
                <div className="bento3 col-span-2 rounded relative overflow-hidden">
                    <p className="text-1xl text-white tracking-widest absolute bottom-0 right-0 text-end cursive p-4 z-3">
                        Sofiero Slott
                        <br />
                        Skåne Landskap
                        <br />
                        Hälsingborg Kommun
                    </p>
                    <div className="progBlurLeft rounded absolute top-0"></div>
                </div>
                <div className="bento4 relative rounded p-4 col-span-4 sm:col-span-2 overflow-hidden">
                    {loading ? (
                        <p>Loading GitHub contributions...</p>
                    ) : latestCommit ? (
                        <div className="relative z-10 flex flex-col gap-6">
                            <p>
                                Latest GitHub commit in 
                                <span className="font-bold"> {latestCommit.repository}</span>:
                                <br />
                                <span className="text-3xl">{latestCommit.message}</span>
                            </p>
                            <p>
                                Committed on: <span>{new Date(latestCommit.date).toLocaleString()}</span>
                            </p>
                        </div>
                    ) : (
                        <p>No contributions found.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Bento;
