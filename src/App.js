/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import Path from './Path';
import Guide from './Guide/Guide';
import Artist from './Artist/Artist';
import List from './Artist/List';
import Regist from './Artist/Regist';
import View from './Artist/View';
import Modify from './Artist/Modify';
import Gallery from './Gallery/Gallery';
import GalleryStart from './Gallery/Start';
import GalleryRegist from './Gallery/Regist';
import Activity from './Activity/Activity';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="app-container">
        <Routes>
          <Route path="/path" element={<Path />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/artist/list" element={<List />} />
          <Route path="/artist/regist" element={<Regist />} />
          <Route path="/artist/view" element={<View />} />
          <Route path="/artist/modify" element={<Modify />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/start" element={<GalleryStart />} />
          <Route path="/gallery/regist" element={<GalleryRegist />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
