import { Button } from "@components/button"
import { Translator } from "@utils"
import { PlusIcon } from "lucide-react"
import { Inbox } from "./inbox"
import { Profile } from "./profile"
import { IndexSheet } from "./sheet"
import { useAuth } from "@contexts/auth"

export function IndexTopBar() {
  const { hasSession, handleLogin } = useAuth()
  return (
    <header className="border-b">
      <div className="container p-3 flex justify-between">
        <div className="flex items-center gap-3">
          <IndexSheet />
          <h1 className="font-display font-black text-xl">GM Notes</h1>
        </div>
        <div className="flex items-center gap-2">
          {!hasSession && (
            <Button variant="outline" onClick={handleLogin}>
              <Translator path="components.indexTopBar.login" />
            </Button>
          )}
          {hasSession && (
            <>
              <Button variant="outline" size="icon">
                <PlusIcon />
              </Button>
              <Inbox />
              <Profile />
            </>
          )}
        </div>
      </div>
    </header>
  )
}
