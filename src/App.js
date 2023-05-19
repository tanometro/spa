import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Page404 from "./pages/Page404"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header"
import { Link } from 'react-router-dom';
import Post from './pages/Post';
import Categoria from './pages/Categoria';

function App() {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sobre" element={<Sobre/>}/>
      <Route path="/post/:id" element={<Post/>}/>
      <Route path="/post/categoria/:id/*" element={<Categoria/>}/> {/*Se agrega el /* dado que tiene algo después de categoria, necesario para subsistemas de rutas*/}
      <Route path="*" element={<Page404/>}/> {/*Ruta comodin para cuando no existe el path*/}
    </Routes>
  </Router>
  );
}

export default App;
