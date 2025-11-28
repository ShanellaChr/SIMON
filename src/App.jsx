import { Routes, Route } from "react-router-dom";
// import pages
import Login from './pages/Login'
import Monitoring from './pages/Monitoring-Summary'
import SIMCard from './pages/SIMCard'
import Geo from './pages/Geo'
import Report from './pages/Report'

//import components
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/monitoring-summary" element={<Monitoring />} />
        <Route path="/simcard" element={<SIMCard />} />
        <Route path="/geo" element={<Geo />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </div>
  );
}

export default App;