import Footer from "../Common/Footer";
import Banner from "./Home/Banner";
import Experience from "./Home/Experience";
import Projects from "./Home/Projects";
import Skills from "./Home/Skills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Experience></Experience>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;