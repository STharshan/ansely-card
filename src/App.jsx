import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Ansely from "./pages/Ansely";
import Damien from "./pages/Daiman";
import HarrisonSpice from "./pages/HarrisonSpice.jsx";
import Josh from "./pages/Josh";
import MusicHubPage from "./pages/MusicHubPage";
import BroadwayRemapping from "./pages/BroadwayRemapping.jsx";
import Boxfit from "./pages/Boxfit.jsx";
import OviBodyShop from "./pages/OviBodyShop.jsx";
import Afmok from "./pages/af-mokperformance.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/g.selva" element={<Ansely/>} />
        <Route path="/damien" element={<Damien />} />
        <Route path="/harrison-spice" element={<HarrisonSpice />} />
        <Route path="/josh" element={<Josh />} />
        <Route path="/music-hub" element={<MusicHubPage />} />
        <Route path="/broadway-remapping" element={<BroadwayRemapping />} />
        <Route path="/boxfitcoaching" element={<Boxfit />} />
        <Route path="/ovi-body-shop" element={<OviBodyShop />} />
        <Route path="/af-mokperformance" element={<Afmok />} />
      </Routes>
    </Router>
  );
}

export default App;
