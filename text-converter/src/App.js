import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';
import { BlogPage } from './pages/BlogPage/BlogPage';
import { CSSPage } from './pages/CSSPage/CSSPage';
import { PythonPage } from './pages/PythonPage/PythonPage';
import { JSPage } from './pages/JSPage/JSPage';


function App() {

  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/upper-case-to-lower-case-css-rules" element={<CSSPage />} />
        <Route path="/blog/convert-capital-to-lowercase-python" element={<PythonPage />} />
        <Route path="/blog/convert-capital-to-lowercase-python" element={<CSSPage />} />
        <Route path="/blog/convert-upper-case-to-lower-case-in-js" element={<JSPage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
