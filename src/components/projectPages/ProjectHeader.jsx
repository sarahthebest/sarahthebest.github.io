const ProjectHeader = (data) => {
  return (
    <div className="mx-auto text-center p-0 m-0 w-full">
      <div className="projectTitle align-items-center my-auto h-64">
        <h1
          className="my-3 cursive bg-gradient-to-r to-purple from-orange
               inline-block text-transparent bg-clip-text text-6xl"
        >
          {data.project.title}
        </h1>
        <ol className="projectTags mt-2 flex flex-row text-base">
          {data.project.tags.map((tag, index) => (
            <li
              key={index}
              className="tag spanBorder p-2 mono rounded-full customBorder me-3"
            >
              #{tag}
            </li>
          ))}
        </ol>
      </div>

    </div>
  );
};

export default ProjectHeader;
