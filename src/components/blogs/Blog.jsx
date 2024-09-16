import { Link, Outlet } from "react-router-dom";
import data from "../../assets/json/blogs.json";
import ProjectBG from "../projectPages/ProjectBG";

const Blog = () => {
    const blogs = data.blogs;

    return (
        <>
            <ProjectBG />
            <main className="blog mt-32 px-6 lg:px-0  pointer-events-auto flex flex-col gap-4 rounded mx-auto container-lg">
                <section className="blogIntro flex flex-row justify-between">
                    <h1>Writing</h1>
                    <p className="w-1/2 md:w-1/3">
                        A space for my reflections and insights. I explore
                        topics related to design, technology, and beyond.
                        Writing helps me untangle my thoughts and see my work
                        through a creative lens.
                    </p>
                </section>
                <section className="blogPosts grid grid-cols-2 gap-4">
                    <div className="col-span-1"></div>
                    <div className="col-span-1 text-end">
                        <ul className="divide-y flex flex-col divide-slate-500">
                            {blogs.map((blog) => (
                                <li key={blog.title} className="py-2">
                                    <Link
                                        to={`/blog/blogpost${blog.link}`}
                                        state={{ title: blog.title }}
                                        className="hover:text-blue-500 justify-between w-full flex hover:underline"
                                    >
                                        <p>{blog.date}</p>
                                        <p>{blog.title}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <Outlet />
            </main>
        </>
    );
};

export default Blog;
