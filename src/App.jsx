import About from "./components/About";
import Blog from "./components/blogs/Blog";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/common/Footer";
import GradientBlur from "./components/common/GradientBlur";
import Nav from "./components/common/Nav";
import CursorTrail from "./components/fun/cursorTrail";
import BlogPost from "./components/blogs/BlogPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <GradientBlur />
                <Nav />
                <CursorTrail />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/blogpost/:link" element={<BlogPost />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
