import { useState } from "react";
import "./startPage.css";
import { FaArrowRight } from "react-icons/fa";
import repos from "../../assets/json/gh_data.json";

const Cards = () => {
    const [topCard, setTopCard] = useState(0); 
    const [isSwiping, setIsSwiping] = useState(false); 

    const handleSwipe = () => {
        if (topCard < repos.repositories.length - 1) {
            setIsSwiping(true); 

            setTimeout(() => {
                setTopCard((prevIndex) => prevIndex + 1); 
                setIsSwiping(false); 
            }, 300); 
        }
    };

    return (
        <div className="relative flex flex-col items-center w-full h-full">
            {repos.repositories.map((repo, index) => {
                const isTopCard = index === topCard; 
                const isCardSwiping = isTopCard && isSwiping; 

                return (
                    <div
                        key={index}
                        className={`card absolute left-5 top-5 bg-white p-4 shadow-md rounded-lg transition-transform duration-300 ease-in-out transform ${
                            isTopCard ? "scale-105 z-10" : `z-${repos.repositories.length - index}`
                        } ${isCardSwiping ? "translate-x-full opacity-0" : ""}`} 
                    >
                        {!isCardSwiping && (
                            <>
                                <a
                                    href={`https://github.com/sarahthebest/${repo.repository}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold hover:underline hover:text-orange"
                                >
                                    {repo.repository}
                                </a>
                                <p>Last updated: {new Date(repo.date).toLocaleString()}</p>
                            </>
                        )}
                    </div>
                );
            })}
            <button className="place-self-end" onClick={handleSwipe}>
                <FaArrowRight />
            </button>
        </div>
    );
};

export default Cards;
