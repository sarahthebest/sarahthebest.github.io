import About from "./components/About";
import Blog from "./components/blogs/Blog";
import Home from "./components/Home";
import PortfolioCase from "./components/PortfolioCase";
import ScrollToTop from "./components/ScrollToTop";
import Velocity from "./components/Velocity";
import Footer from "./components/common/Footer";
import GradientBlur from "./components/common/GradientBlur";
import Nav from "./components/common/Nav";
import BlogPost from "./components/blogs/BlogPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <GradientBlur />
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/velocity" element={<Velocity />} />
                    <Route path="/portfolioCase" element={<PortfolioCase />} />
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
