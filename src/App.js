import { Home, About, CSV, Tribes, NotFound } from './pages';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header, Navbar, Footer } from './layouts';
import { useMediaQuery } from 'react-responsive';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/csv" element={<CSV/>}></Route>
        <Route path="/tribes" element={<Tribes/>}></Route>
        <Route path="/*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
