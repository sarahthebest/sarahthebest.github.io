import { useNavigate } from "react-router-dom";

const ReturnBtn = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <div className="top-32 left-1 lg:left-44 text-sm md:flex flex-col gap-6">
            <button className="flex flex-row gap-1" onClick={handleClick}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="lucide lucide-corner-up-left"
                >
                    <polyline points="9 14 4 9 9 4" />
                    <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                </svg>
                <span>
                    <p>Return</p>
                </span>
            </button>
        </div>
    );
};

export default ReturnBtn;
