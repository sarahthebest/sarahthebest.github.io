import "../../assets/css/projectStyles.css";

const BackgroundCard = ({ project }) => {
  return (
    <div
      className="container-lg gap-1 pb-3 flex flex-col rounded dark:border-borderColor border-darkBorder 
      border mx-auto background bg-customBGDark dark:bg-customBG bg-gradient-to-tr via-transparent to-purple/30 from-orange/30">
        <div className="flex flex-row justify-between flex-wrap p-3">
          <h2 className="align-self-start">Background</h2>
          <p className="tag spanBorder px-3 rounded-full my-auto mx-3 p-0">
            {project.date}
          </p>
      </div>
        <p className="px-3">{project.background}</p>
        <h2 className="px-3">Mission</h2>
        <p className="px-3">{project.mission}</p>
      {project.note && (
        <div
          className="note dark:border-borderColor border-darkBorder 
        border border-b-0 border-r-0 border-l-0 gap-2 rounded p-3"
        >
            <p className="tag spanBorder rounded-full my-auto px-1 p-0 w-min">
              #Note
            </p>
            <p className="px-3 mt-2">{project.note}</p>
        </div>
      )}
    </div>
  );
};

export default BackgroundCard;
