import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import AdminHomePage from "./components/AdminHomePage";
import Sample from "./Sample";
import Login from "./components/pages/Login";
import ForgetPassword from "./components/pages/ForgetPassword";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AdminHomePage />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
