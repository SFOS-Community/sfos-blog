import { useToggle } from '@mantine/hooks';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ToTopButton from './components/Actions/ToTopButton';
import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';
import Blog from './components/Pages/Blog';
import HomeBlog from './components/Pages/HomeBlog';
import { BlogsContext, ReadingContext } from './Context';

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const [reading, setReading] = useState();

  return (
    <>
      <Header />
      <BlogsContext.Provider value={blogs}>
        <Routes>
          <Route
            index
            element={
              <ReadingContext.Provider value={reading}>
                <HomeBlog setBlogs={setBlogs} setReading={setReading} />
              </ReadingContext.Provider>
            }
          />
          <Route path="blog/:id" element={<Blog />} />
        </Routes>
      </BlogsContext.Provider>
      <ToTopButton />
      <Footer />
    </>
  );
}
