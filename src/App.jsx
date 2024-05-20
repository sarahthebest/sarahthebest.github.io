import "./assets/css/App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Nav from "./components/common/Nav";
import Bento from "./components/startPage/Bento";
import Toolbox from "./components/startPage/Toolbox";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Bento />
      <Toolbox />
      <Footer />
    </>
  );
}

export default App;
