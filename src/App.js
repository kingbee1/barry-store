
import './App.scss';
import Header from './components/Header'
import Main from './components/Main';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Content from './components/Content';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Header/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
      <Main />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
