import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeProject from "../components/HomeProject";
import LoadingPage from "../components/LoadingPage";
import MainFocus from "../components/MainFocus";
import OurProjects from "../components/OurProjects";

const Home = () => {
  return (
    <>
      <Header />
      <HomeProject />
      <About />
      <MainFocus />
      <OurProjects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
