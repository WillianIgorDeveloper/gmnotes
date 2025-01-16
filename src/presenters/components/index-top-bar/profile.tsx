import { Avatar, AvatarFallback, AvatarImage } from "@components/avatar"
import { DropdownMenuTrigger } from "@components/dropdown-menu"
import { DropdownMenuLabel, DropdownMenuSeparator } from "@components/dropdown-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "@components/dropdown-menu"
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
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SquareUserIcon /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NotebookTextIcon /> Posts
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-500">
          <LogOutIcon /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
