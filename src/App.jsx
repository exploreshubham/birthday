import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router components
import HomePage from './pages/HomePage';
import Propose2Page from './pages/Propose2Page';
import Propose3Page from './pages/Propose3Page';
import Propose4Page from './pages/Propose4Page';

function App() {
  return (
    <HomePage/>
    // <Router>
    //   <div>
    //     {/* Define Routes */}
    //     <Routes>
    //       <Route path="/" element={<HomePage />} /> {/* HomePage route */}
    //       <Route path="/propose2" element={<Propose2Page />} /> {/* Propose2Page route */}
    //       <Route path="/propose3" element={<Propose3Page />} /> {/* Propose3Page route */}
    //       <Route path="/propose4" element={<Propose4Page />} /> {/* Propose4Page route */}
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
