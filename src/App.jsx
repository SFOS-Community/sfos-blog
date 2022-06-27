import { Routes, Route } from 'react-router-dom';
import ToTopButton from './components/Actions/ToTopButton';
import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';
import Blog from './components/Pages/Blog';
import HomeBlog from './components/Pages/HomeBlog';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomeBlog />} />
        <Route path="blog/:id" element={<Blog />} />
      </Routes>
      <ToTopButton />
      <Footer />
    </>
  );
}
