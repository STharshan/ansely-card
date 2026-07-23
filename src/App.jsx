import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Ansely from "./pages/Ansely";
import Damien from "./pages/Daiman";
import HarrisonSpice from "./pages/HarrisonSpice.jsx";
import Josh from "./pages/Josh";
import MusicHubPage from "./pages/MusicHubPage";
import HairDressBurn from "./pages/cards/HairDressBurn/HairDressBurn.jsx";
import ATB from "./pages/cards/ATB/ATB.jsx";
import Nikita from "./pages/cards/Nikita/Nikita.jsx";
import Baber from "./pages/cards/Baber/baber.jsx";
import RS from "./pages/cards/RS/Rs.jsx";
import Greystone from "./pages/cards/GeryStone/GreyStone.jsx";
import ChocoholicsDesserts from "./pages/cards/ChocoholicsDesserts/ChocoholicsDesserts.jsx";
import ShahzTyres from "./pages/cards/Shaz/Shaz.jsx";
import MehranGarages from "./pages/cards/mehransgarage/mehransgarage.jsx";

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
        <Route path="/twenty-eight-barbers" element={<Baber />} />
        <Route path="/rs-mobile-services" element={<RS />} />
        <Route path="/greystone-automotive" element={<Greystone />} />
        <Route path="/chocoholics-desserts" element={<ChocoholicsDesserts />} />
        <Route path="/shahz-tyres" element={<ShahzTyres />} />
        <Route path="/mehran-garages" element={<MehranGarages />} />
      </Routes>
    </Router>
  );
}

export default App;
