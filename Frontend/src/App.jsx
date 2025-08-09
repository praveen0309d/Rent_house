import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main_Home from './Components/Home/Main_Home';
import Main_Buy from './Components/Services/Buy/Main_Buy';
import Main_Lease from './Components/Services/Lease/Main_Lease';
import Main_Rent from './Components/Services/Rent/Main_Rent';
import Main_Enq from './Components/Enqiry';
import Navbar from './Components/Navbar';
import About_us from './Components/About_us/About_us';
import ScrollToTop from './ScrollToTop';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main_Home/>} />
        <Route path="/about-us" element={<About_us/>} />
        <Route path="/buy" element={<Main_Buy />} />
        <Route path="/rent" element={<Main_Rent />} />
        <Route path="/lease" element={<Main_Lease />} />
        <Route path="/Enquiry" element={<Main_Enq />} /> {/* Fallback to home for unmatched routes */}
        
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App;
