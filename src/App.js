import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useUser } from "./hooks";
import { PrivateRoutes, PublicRoutes } from "./Routes";

const App = () => {
  const { user } = useUser();
  return (
    <BrowserRouter>
      {user.uid ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
};

export default App;
