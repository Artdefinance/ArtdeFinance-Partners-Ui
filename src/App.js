import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Guide from './Guide/Guide';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/guide" element={<Guide />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
