import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import CountryPage from './Pages/CountryPage';





function App() {


  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:code" element={<CountryPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
