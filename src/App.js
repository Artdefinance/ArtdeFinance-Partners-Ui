import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import Guide from './Guide/Guide';
import Artist from './Artist/Artist';
import List from './Artist/List';
import Regist from './Artist/Regist';
import Gallery from './Gallery/Gallery';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="app-container">
        <Routes>
          <Route path="/guide" element={<Guide />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/artist/list" element={<List />} />
          <Route path="/artist/regist" element={<Regist />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
