import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
  <Navbar  tittle="TextUtils" aboutText="About TextUtils" />
   <div className="container my-3">
   <Textform heading="Enter the Text to Analyze"/>
   </div>
    </>
  );
}

export default App;
