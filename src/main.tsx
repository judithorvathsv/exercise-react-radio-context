import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

import "./SCSS/main.scss";

import { CategoryContextProvider } from "./contexts/CategoryContextProvider.tsx";
import { ILikedProgramContextProvider } from "./contexts/LikedProgramContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ILikedProgramContextProvider>
      <CategoryContextProvider>
        <RouterProvider router={router} />
      </CategoryContextProvider>
    </ILikedProgramContextProvider>
  </React.StrictMode>
);
