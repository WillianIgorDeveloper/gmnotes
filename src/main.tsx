import { ROUTES } from "@utils"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
// Contexts
import { GlobalProvider } from "@contexts/_global"
// Layouts
import { IndexLayout } from "@layouts/_index"
// Pages
import { IndexPage } from "@pages/_index"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<IndexLayout />}>
            <Route path={ROUTES.INDEX} element={<IndexPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  </StrictMode>,
)
