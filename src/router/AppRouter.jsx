import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { AnimatePresence } from "framer-motion";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { AuthLayout } from "../auth/pages/AuthLayout";

export const AppRouter = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/auth/*"
            element={
              <AuthLayout>
                <AuthRoutes />
              </AuthLayout>
            }
          />

          <Route
            path="/*"
            element={
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};
