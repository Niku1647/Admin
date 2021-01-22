import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import Newnav from "./components/Newnav";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/DashboardScreen";
import { Toggle } from "./Toggle";

function App() {
  return (
    <BrowserRouter>
      <Newnav />
    </BrowserRouter>
  );
}

export default App;
