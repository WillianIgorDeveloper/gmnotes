import { Avatar, AvatarFallback, AvatarImage } from "@components/avatar"
import { DropdownMenuTrigger } from "@components/dropdown-menu"
import { DropdownMenuLabel, DropdownMenuSeparator } from "@components/dropdown-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@components/dropdown-menu"
import { Translator } from "@utils"
import { LogOutIcon, NotebookTextIcon, SquareUserIcon } from "lucide-react"

export function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <Translator path="components.indexTopBar.profile.label" />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SquareUserIcon /> <Translator path="components.indexTopBar.profile.menuItem1" />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NotebookTextIcon /> <Translator path="components.indexTopBar.profile.menuItem2" />
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-500">
          <LogOutIcon /> <Translator path="components.indexTopBar.profile.menuItem3" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
