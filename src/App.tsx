import React from "react";
import HomeRoute from "./components/AllRoutes/HomeRoute";
import BusinessRoutes from "./components/AllRoutes/BusinessRoute";
import UserRoutes from "./components/AllRoutes/UserRoutes";
import { useAppSelector } from "./components/Global/Store";
function App() {
  const business = useAppSelector((state) => state.bizClient);
  const user = useAppSelector((state) => state.userData);

  return (
    <div>
      <HomeRoute />
      <BusinessRoutes />
      <UserRoutes />
    </div>
  );
}

export default App;
