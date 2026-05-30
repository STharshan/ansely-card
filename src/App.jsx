import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DigitalCard from "./pages/Home";
import MusicHubPage from "./pages/MusicHubPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DigitalCard />} />
        <Route path="/music-hub" element={<MusicHubPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
