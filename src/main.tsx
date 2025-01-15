import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ROUTES } from "@utils"
import "./index.css"
// Contexts
import { GlobalProvider } from "@contexts/_global"
// Pages
import { IndexPage } from "@pages/_index"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.INDEX} element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  </StrictMode>,
)
