import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import NotMatch from './components/NotMatch';
import Home from './pages/Home';
import UsNews from './pages/UsNews';
import EgNews from './pages/EgyNews';
import { Routes , Route } from "react-router-dom";


function App() {
    return ( 
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usnews" element={<UsNews />} />
                <Route path="/egynews" element={<EgNews />} />

                <Route path="*" element={<NotMatch />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;