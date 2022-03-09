import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import CountryPage from './Pages/CountryPage/CountryPage';
import NotFound from './Pages/NotFoundPage/NotFoundPage';


  const App: React.FC = () => {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:code" element={<CountryPage />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
