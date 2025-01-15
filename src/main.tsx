import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
// Contexts
import { GlobalProvider } from "@contexts/_global"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <div />
    </GlobalProvider>
  </StrictMode>,
)
