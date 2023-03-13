import { Home, About, NotFound } from './pages';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './layouts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
