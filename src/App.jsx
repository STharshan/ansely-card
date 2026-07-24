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
import Slsmartrepair from "./pages/slsmartrepair.jsx";
import Nazmotors from "./pages/nazmotors.jsx";
import Earwego from "./pages/earwego.jsx";
import HairDressBurn from "./pages/cards/HairDressBurn/HairDressBurn.jsx";
import ATB from "./pages/cards/ATB/ATB.jsx";
import Nikita from "./pages/cards/Nikita/Nikita.jsx";
import Baber from "./pages/cards/Baber/baber.jsx";
import RS from "./pages/cards/RS/Rs.jsx";
import Greystone from "./pages/cards/GeryStone/GreyStone.jsx";
import ChocoholicsDesserts from "./pages/cards/ChocoholicsDesserts/ChocoholicsDesserts.jsx";
import ShahzTyres from "./pages/cards/Shaz/Shaz.jsx";
import MehranGarages from "./pages/cards/mehransgarage/mehransgarage.jsx";
import RefurbDoctor from "./pages/cards/Refurb/Refurb.jsx";
import Smashed from "./pages/cards/Smash/Smash.jsx";
import Commit from "./pages/cards/Commit/Commit.jsx";
import SRK from "./pages/cards/SRK/srk.jsx";
import UNIT4 from "./pages/cards/Unit/Unit.jsx";
import CenturionFastFit from "./pages/Centurian/centurian.jsx";
import Collingwood from "./pages/cards/CollingWood/Collingwood.jsx";

import Stoneleys from "./pages/stoneleys.jsx";
import Tomas from "./pages/Tomas.jsx";
import Empire from "./pages/empire.jsx";
import Abbey from "./pages/Abbey.jsx";
import Amma from "./pages/Amma-kitchen-coventry.jsx";
import TK from "./pages/Tk.jsx";


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
        <Route path="/afmokperformance" element={<Afmok />} />
        <Route path="/slsmartrepair" element={<Slsmartrepair />} />
        <Route path="/nazmotors" element={<Nazmotors />} />
        <Route path="/earwego" element={<Earwego />} />
        <Route path="/stoneleys" element={<Stoneleys />} />
        <Route path="/tomas" element={<Tomas />} />
        <Route path="/empire" element={<Empire />} />
        <Route path="/abbey" element={<Abbey />} />
        <Route path="/amma-kitchen-coventry" element={<Amma />} />
        <Route path="/tkautomotive" element={<TK />} />
        <Route path="/BurnsHairDesign" element={<HairDressBurn />} />  
        <Route path="/atbmotorengineers" element={<ATB />} />
        <Route path="/nikitaautocraft" element={<Nikita />} />
        <Route path="/twentyeightbarbers" element={<Baber />} />
        <Route path="/rsmobileservices" element={<RS />} />
        <Route path="/greystoneautomotive" element={<Greystone />} />
        <Route path="/chocoholicsdesserts" element={<ChocoholicsDesserts />} />
        <Route path="/shahztyres" element={<ShahzTyres />} />
        <Route path="/mehrangarages" element={<MehranGarages />} />
        <Route path="/refurbdoctor" element={<RefurbDoctor />} />
        <Route path="/smashedburgers" element={<Smashed />} />
        <Route path="/committedfitness" element={<Commit />} />
        <Route path="/srkhospitality" element={<SRK />} />
        <Route path="/unit4" element={<UNIT4 />} />
        <Route path="/centurionfastfit" element={<CenturionFastFit />} />
        <Route path="/collingwood" element={<Collingwood />} />
      </Routes>
    </Router>
  );
}

export default App;
