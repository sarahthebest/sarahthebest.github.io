import { useLocation } from "react-router-dom";
import data from "../../assets/json/blogs.json";
import ProjectBG from "../projectPages/ProjectBG";
import ReturnBtn from "./ReturnBtn";

const BlogPost = () => {
    const blogs = data.blogs;
    const location = useLocation();
    const { title } = location.state || {};

    if (!title) {
        return (
            <main>
                <h1>Blog Post Not Found</h1>
                <p>The blog post you are looking for does not exist.</p>
            </main>
        );
    }

    const blog = blogs.find((blog) => blog.title === title);

    if (!blog) {
        return (
            <main>
                <h1>Blog Post Not Found</h1>
                <p>The blog post you are looking for does not exist.</p>
            </main>
        );
    }

    return (
        <>
            <ProjectBG />
            <main className="blog relative mt-20 px-6 lg:px-0 pointer-events-auto flex flex-col gap-4 rounded mx-auto container-lg">
                <ReturnBtn />
                <div className="blogPost flex gap-4 flex-col">
                    <div className="blogHeader flex items-center">
                        <h1 className="flex-grow my-auto">{blog.title}</h1>
                        <p>{blog.date}</p>
                    </div>
                    <p>{blog.intro}</p>
                    <p>{blog.text1}</p>
                    <p>{blog.text2}</p>
                    {(blog.img1 || blog.img2) && (
                        <div className="imgWrapper flex flex-row">
                            {blog.img1 && (
                                <img
                                    src={blog.img1}
                                    alt="Image 1"
                                    className="w-1/2"
                                />
                            )}
                            {blog.img2 && (
                                <img
                                    src={blog.img2}
                                    alt="Image 2"
                                    className="w-1/2"
                                />
                            )}
                        </div>
                    )}
                    <p>{blog.end}</p>
                </div>
            </main>
        </>
    );
};

export default BlogPost;
