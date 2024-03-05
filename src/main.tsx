import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

import "./SCSS/main.scss";
import { ProgramContextProvider } from "./contexts/ProgramContextProvider.tsx";
import { CategoryContextProvider } from "./contexts/CategoryContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/*     <ProgramContextProvider> */}
    <CategoryContextProvider>
      <RouterProvider router={router} />
    </CategoryContextProvider>
    {/*  </ProgramContextProvider> */}
  </React.StrictMode>
);
