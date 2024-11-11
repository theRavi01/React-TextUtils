import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  //   <>
  // <Navbar  tittle="TextUtils" aboutText="About TextUtils" />
  //  <div className="container my-3">
  //  <Textform heading="Enter the Text to Analyze"/>
  //  </div>
  //   </>
        <Router>
        <div>
        <Navbar  tittle="TextUtils" aboutText="About TextUtils" />
          <Routes>
            <Route path="" element={<Textform heading="Enter the Text to Analyze"/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
