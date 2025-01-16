import { IndexTopBar } from "@components/index-top-bar"
import { Outlet } from "react-router-dom"

export function IndexLayout() {
  return (
    <div>
      <IndexTopBar />
      <Outlet />
    </div>
  )
}
