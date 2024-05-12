import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/Style.css';
import './Styles/login.css'
import Header from './components/Header';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div>
      <script src="https://accounts.google.com/gsi/client"></script>
      <Routes>
          <Route path="/login" element={<Login />} />
          {/* Otras rutas */}
        </Routes>
        <Header />
      </div>
    </Router>
  );
}

export default App;
