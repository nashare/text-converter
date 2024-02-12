import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';
import { BlogPage } from './pages/BlogPage/BlogPage';

function App() {

  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<BlogPage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
