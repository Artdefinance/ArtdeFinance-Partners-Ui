/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import Path from './Path';
import Guide from './Guide/Guide';
import Main from './Main/Main';
import Artist from './Artist/Artist';
import List from './Artist/List';
import Regist from './Artist/Regist';
import View from './Artist/View';
import Modify from './Artist/Modify';
import Gallery from './Gallery/Gallery';
import GalleryStart from './Gallery/Start';
import GalleryRegist from './Gallery/Regist';
import GalleryConfirm from './Gallery/Confirm';
import GallerySorry from './Gallery/Sorry';
import Activity from './Activity/Activity';
import ActivityList from './Activity/List';
import ActivityPrice from './Activity/Price';
import ActivityAuction from './Activity/Auction';
import AuctionSoldout from './Activity/AuctionSoldout';
import AuctionRemove from './Activity/AuctionRemove';
import StatusGuide from './Activity/StatusGuide';
import AuctionStatus from './Activity/AuctionStatus';
import Wallet from './Wallet/Wallet';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app-container">
      <Routes>
        <Route path="/path" element={<Path />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/main" element={<Main />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/artist/list" element={<List />} />
        <Route path="/artist/regist" element={<Regist />} />
        <Route path="/artist/view" element={<View />} />
        <Route path="/artist/modify" element={<Modify />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/start" element={<GalleryStart />} />
        <Route path="/gallery/regist" element={<GalleryRegist />} />
        <Route exact path="/gallery/confirm" element={<GalleryConfirm />} />
        <Route path="/gallery/sorry" element={<GallerySorry />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/activity/list" element={<ActivityList />} />
        <Route path="/activity/price" element={<ActivityPrice />} />
        <Route path="/activity/auction" element={<ActivityAuction />} />
        <Route path="/activity/auction/soldout" element={<AuctionSoldout />} />
        <Route path="/activity/auction/remove" element={<AuctionRemove />} />
        <Route path="/activity/auction/status" element={<AuctionStatus />} />
        <Route path="/activity/guide" element={<StatusGuide />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
