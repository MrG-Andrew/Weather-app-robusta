import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './components/Home'


function BooksApp() {
  

  return (
    
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={
            <Home/>
          }/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default BooksApp;
