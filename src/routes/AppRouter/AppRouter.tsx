import React from "react";
import { Route, Routes } from "react-router-dom";
import { navigationsRoutes } from "../routes";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {navigationsRoutes.map((route, i) =>
        route.path ? (
          <Route key={i} path={route.path} element={<route.element />} />
        ) : null
      )}
    </Routes>
  );
};
export default AppRouter;
