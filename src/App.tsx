import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FAQ from './pages/FAQ/FAQ';
import Home from './pages/Home/Home';
import LearnMore from './pages/LearnMore/LearnMore';
import SignIn from './pages/SignIn/SignIn';
import GetToKnowUs from './pages/GetToKnowUs/GetToKnowUs';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/LearnMore" element={<LearnMore />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </Router>
      <GetToKnowUs/>
    </div>
  );
};

export default App;
