import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router";
import Index from "./pages/index"
import Contacts from "./pages/contacts";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Index />} />
        <Route path="yhteystiedot" element={<Contacts />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;