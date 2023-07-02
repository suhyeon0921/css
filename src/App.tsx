import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MuiToDoPage from './pages/MuiToDoPage';
import StyledToDoPage from './pages/StyledToDoPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MuiToDoPage />} />
        <Route path='/main' element={<StyledToDoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
