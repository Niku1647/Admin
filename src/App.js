import { BrowserRouter } from "react-router-dom";
import AdminHomePage from "./components/AdminHomePage";
import Sample from "./Sample";

function App() {
  return (
    <BrowserRouter>
      <AdminHomePage />
    </BrowserRouter>
  );
}

export default App;
