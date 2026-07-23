import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Ansely from "./pages/Ansely";
import Damien from "./pages/Daiman";
import HarrisonSpice from "./pages/HarrisonSpice.jsx";
import Josh from "./pages/Josh";
import MusicHubPage from "./pages/MusicHubPage";
import HairDressBurn from "./pages/cards/HairDressBurn/HairDressBurn.jsx";
import ATB from "./pages/cards/ATB/ATB.jsx";
import Nikita from "./pages/cards/Nikita/Nikita.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/g.selva" element={<Ansely/>} />
        <Route path="/damien" element={<Damien />} />
        <Route path="/harrison-spice" element={<HarrisonSpice />} />
        <Route path="/josh" element={<Josh />} />
        <Route path="/music-hub" element={<MusicHubPage />} />
        <Route path="/Burns-Hair-Design" element={<HairDressBurn />} />  
        <Route path="/atb-motor-engineers" element={<ATB />} />
        <Route path="/nikita-autocraft" element={<Nikita />} />
      </Routes>
    </Router>
  );
}

export default App;
