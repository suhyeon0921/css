import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MuiToDoPage from './pages/MuiToDoPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MuiToDoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
