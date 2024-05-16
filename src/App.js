import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact Component={Home}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
