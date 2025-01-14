/* eslint-disable react/no-unescaped-entities */
import commit from "../../assets/json/gh_data.json";
import "./startPage.css";

const Bento = () => {
    const latestCommit = commit.latest_commit;

    return (
        <section className="container-lg mx-auto p-0 bg-customBGDark dark:bg-customBG rounded">
            <div className="p-4 h-fit grid grid-cols-4 grid-rows-3 sm:grid-rows-2 gap-4 rounded customBorder my">
                <div className="col-span-4 sm:col-span-3 p-2 text-center rounded customBorder align-items-center">
                    <h3 className="mb-4">ヾ(＾ ∇ ＾).</h3>
                    <p>
                        Hello there! I'm <span className="cursive">Sarah</span>,
                        a curious UX developer. Currently @Jensen YH learning
                        frontend-development and web security. Passionate
                        security, accessibility and bold fonts.
                    <br />
                        Currently seeking internship positions for summer 2025!
                    </p>
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
                <div className="bento4 bg-light dark:bg-bg relative rounded justify-between flex flex-col col-span-4 sm:col-span-2">
                    <div className="textBox flex gap-6 flex-col p-4">
                        <p className="text-2xl">
                            Latest commit made in:
                            <br />
                            <a
                                href={`https://github.com/sarahthebest/${latestCommit.repository}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold hover:underline hover:text-orange"
                            >
                                {` ${latestCommit.repository}`}
                            </a>
                            <br />
                        </p>
                        <p className="text-2xl">
                            Commit message: <br /> "{latestCommit.message}"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bento;
