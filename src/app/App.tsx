import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Index from "./pages/index"
import Contacts from "./pages/contacts";
import Services from "./pages/services";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Index />} />
        <Route path="yhteystiedot" element={<Contacts />} />
        <Route path="palvelut" element={<Services />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;