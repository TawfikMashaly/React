import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes , Route} from 'react-router-dom';

function App() {
    return ( 
        <>
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/post" element={<Posts />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />
        </>
    );
}

export default App;