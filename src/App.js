import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import Guide from './Guide/Guide';
import Artist from './Artist/Artist';
import List from './Artist/List';
import Regist from './Artist/Regist';
import View from './Artist/View';
import Modify from './Artist/Modify';
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
          <Route path="/artist/view" element={<View />} />
          <Route path="/artist/modify" element={<Modify />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <div className="pathGuide">
          <table className="pathtable">
            <thead>
              <tr>
                <th>depth1</th>
                <th>depth2</th>
                <th>path</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>component guide</td>
                <td>-</td>
                <td>
                <Link to="/guide">
                  /guide
                </Link>
                </td>
              </tr>
              <tr>
                <td>Artist</td>
                <td>Artist</td>
                <td>
                <Link to="/artist">
                  /artist
                </Link>
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>Artist List</td>
                <td>
                <Link to="/artist/list">
                  /artist/list
                </Link>
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>Artist Registration</td>
                <td>
                <Link to="/artist/regist">
                  /artist/regist
                </Link>
                </td>
              </tr>

              <tr>
                <td>Gallery</td>
                <td>Gallery</td>
                <td>
                <Link to="/gallery">
                  /gallery
                </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
