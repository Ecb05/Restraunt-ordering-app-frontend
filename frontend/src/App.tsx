import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Popular";
import Curry from "./pages/Curry";
import Ramen from "./pages/Ramen";
import Teppanyaki from "./pages/Tepanyaki";
import CuisineNav from "./components/CuisineNav";

const AppWrapper = () => {
  const location = useLocation();
  const activeRoute = location.pathname.split("/")[2] || "Popular";

  return (
    <>
      <CuisineNav active={activeRoute.charAt(0).toUpperCase() + activeRoute.slice(1)} />
      <Routes>
        <Route path="/menu/popular" element={<Home />} />
        <Route path="/menu/curry" element={<Curry />} />
        <Route path="/menu/ramen" element={<Ramen />} />
        <Route path="/menu/teppanyaki" element={<Teppanyaki />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
