import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';
import { BlogPage } from './pages/BlogPage/BlogPage';
import { CSSPage } from './pages/CSSPage/CSSPage';


function App() {

  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/upper-case-to-lower-case-css-rules" element={<CSSPage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
