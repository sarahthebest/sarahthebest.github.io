import { useState, useEffect } from "react";

const Bento = () => {
    const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
    const [totalCommits, setTotalCommits] = useState(null);
    const [latestCommit, setLatestCommit] = useState(null);
    const [loading, setLoading] = useState(true);

    const getCurrentDateISO = () => new Date().toISOString();
    const getStartOfYearDateISO = () => {
        const startOfYear = new Date();
        startOfYear.setMonth(0, 9);
        startOfYear.setHours(0, 0, 0, 0);
        return startOfYear.toISOString();
    };

    async function fetchContributions() {
        const query = `
      query {
        user(login: "sarahthebest") {
          contributionsCollection(from: "${getStartOfYearDateISO()}", to: "${getCurrentDateISO()}") {
            totalCommitContributions
          }
          repository(name: "sarahthebest.github.io") {
            defaultBranchRef {
              target {
                ... on Commit {
                  history(first: 1) {
                    edges {
                      node {
                        messageHeadline
                        committedDate
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

        const response = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${githubToken}`,
            },
            body: JSON.stringify({ query }),
        });

        const result = await response.json();
        const totalCommits =
            result.data.user.contributionsCollection.totalCommitContributions;
        const latestCommit =
            result.data.user.repository.defaultBranchRef.target.history.edges[0]
                .node;

        setTotalCommits(totalCommits);
        setLatestCommit(latestCommit);
        setLoading(false);
    }

    useEffect(() => {
        if (githubToken) {
            fetchContributions();
        } else {
            console.error("GitHub token is missing");
        }
    }, [githubToken]);

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
                        src="./img/selfie.jpg"
                        alt="Selfie"
                    />
                </div>
                <div className="bento3 col-span-2 rounded overflow-hidden"></div>
                <div className="bento4 relative rounded p-4 col-span-4 sm:col-span-2 overflow-hidden">
                    <div className="bentoCircle bg-orange top-0 left-52 absolute"></div>
                    <div className="bentoCircle bg-pink-600 top-10 absolute"></div>
                    <div className="bentoCircle bg-purple left-80 top-20 absolute"></div>
                    {loading ? (
                        <p>Loading GitHub contributions...</p>
                    ) : (
                        <div className="relative z-10 flex flex-col gap-6">
                            <p>
                                Total GitHub commits this year:
                                <br />
                                <span className="text-3xl">{totalCommits}</span>
                            </p>
                            {latestCommit && (
                                <p>
                                    Latest Commit:
                                    <br />
                                    <span className="text-3xl">
                                        {latestCommit.messageHeadline} on
                                        {new Date(
                                            latestCommit.committedDate
                                        ).toLocaleDateString()}
                                    </span>
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Bento;
