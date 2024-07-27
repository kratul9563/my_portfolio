import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
     <Layout/>
     <div className="container">
         <About/>  
         <Education/>
         <Techstack/>
          <WorkExp/>
         <Projects/>
        
         <Contact/>
     </div>
      <div className="footer">
        <h4 className="text-center mb-3 ms-3">
              Made By ❤ Kratul Singh &copy; 2024
        </h4>
      </div>
      <ScrollToTop smooth color="#f29f67" style={{backgroundColor: '#1e1e2c' ,borderRadius:20}}/>
    </>
  );
}

export default App;
