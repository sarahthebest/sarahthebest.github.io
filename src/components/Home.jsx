import Header from "./common/Header";
import Bento from "./startPage/Bento";
import Toolbox from "./startPage/Toolbox";

const Home = () => {
    return ( 
        <div className="home">
        <Header />
        <Bento />
        <Toolbox/>
        </div>
     );
}
 
export default Home;