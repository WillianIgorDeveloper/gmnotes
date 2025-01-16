import { Button } from "@components/button"
import { PlusIcon } from "lucide-react"
import { Inbox } from "./inbox"
import { Profile } from "./profile"
import { IndexSheet } from "./sheet"

export function IndexTopBar() {
  return (
    <header className="border-b">
      <div className="container p-3 flex justify-between">
        <div className="flex items-center gap-3">
          <IndexSheet />
          <h1 className="font-display font-black text-xl">GM Notes</h1>
        </div>
        <div className="flex items-center gap-2">
          {/* <Button variant="outline">Login</Button> */}
          <Button variant="outline" size="icon">
            <PlusIcon />
          </Button>
          <Inbox />
          <Profile />
        </div>
      </div>
    </header>
  )
}
