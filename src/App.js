/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import Path from './Path';
import ArteComponents from './ArteComponent/Components';
import Main from './Main/Main';
import ArtworksRegist from './Main/Regist';
import ArtworksProcess01 from './Main/Process01';
import ArtworksProcess02 from './Main/Process02';
import ArtworksProcess03 from './Main/Process03';
import ArtworksProcess04 from './Main/Process04';
import ArtworksProcess05 from './Main/Process05';
import ArtworksProcess06 from './Main/Process06';
import ArtworksProcess07 from './Main/Process07';
import ArtworksList from './Main/List';
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
import ActivityNoresult from './Activity/Noresult';
import ActivityList from './Activity/List';
import ActivityPrice from './Activity/Price';
import ActivityAuction from './Activity/Auction';
import AuctionSoldout from './Activity/AuctionSoldout';
import AuctionRemove from './Activity/AuctionRemove';
import StatusGuide from './Activity/StatusGuide';
import AuctionStatus from './Activity/AuctionStatus';
import Wallet from './Wallet/Wallet';
import PrivacyPolicy from './Service/PrivacyPolicy';
import TermsService from './Service/TermsService';
import Curation from './Curation/Curation';
import CurationNoResult from './Curation/Noresult';
import CurationView from './Curation/View';
import CurationEnd from './Curation/End';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app-container">
      <Routes>
        <Route path="/path" element={<Path />} />
        <Route path="/artecomponents" element={<ArteComponents />} />
        <Route path="/main" element={<Main />} />
        <Route path="/main/artworks/list" element={<ArtworksList />} />
        <Route path="/main/artworks/regist" element={<ArtworksRegist />} />
        <Route path="/main/artworks/process01" element={<ArtworksProcess01 />} />
        <Route path="/main/artworks/process02" element={<ArtworksProcess02 />} />
        <Route path="/main/artworks/process03" element={<ArtworksProcess03 />} />
        <Route path="/main/artworks/process04" element={<ArtworksProcess04 />} />
        <Route path="/main/artworks/process05" element={<ArtworksProcess05 />} />
        <Route path="/main/artworks/process06" element={<ArtworksProcess06 />} />
        <Route path="/main/artworks/process07" element={<ArtworksProcess07 />} />
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
        <Route path="/activity/noresult" element={<ActivityNoresult />} />
        <Route path="/activity/list" element={<ActivityList />} />
        <Route path="/activity/price" element={<ActivityPrice />} />
        <Route path="/activity/auction" element={<ActivityAuction />} />
        <Route path="/activity/auction/soldout" element={<AuctionSoldout />} />
        <Route path="/activity/auction/remove" element={<AuctionRemove />} />
        <Route path="/activity/auction/status" element={<AuctionStatus />} />
        <Route path="/activity/guide" element={<StatusGuide />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/service/policy" element={<PrivacyPolicy />} />
        <Route path="/service/terms" element={<TermsService />} />
        <Route path="/curation" element={<Curation />} />
        <Route path="/curation/noresult" element={<CurationNoResult />} />
        <Route path="/curation/view" element={<CurationView />} />
        <Route path="/curation/end" element={<CurationEnd />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
