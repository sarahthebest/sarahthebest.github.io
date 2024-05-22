import Header from "./common/Header";
import Bento from "./startPage/Bento";
import Cases from "./startPage/Cases";
import Toolbox from "./startPage/Toolbox";

const Home = () => {
    return ( 
        <div className="home">
        <Header />
        <Bento />
        <Toolbox/>
        <Cases />
        </div>
     );
}
 
export default Home;