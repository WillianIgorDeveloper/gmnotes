import { Avatar, AvatarFallback, AvatarImage } from "@components/avatar"
import { Button } from "@components/button"
import { Sheet, SheetContent, SheetDescription } from "@components/sheet"
import { SheetHeader, SheetTitle, SheetTrigger } from "@components/sheet"
import { ThemeToggler } from "@components/theme-toggler"
import { BookUserIcon, EarthIcon, FlameIcon, LayoutListIcon } from "lucide-react"
import { HouseIcon, MenuIcon, NotebookTabsIcon } from "lucide-react"

export function IndexSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-2 flex flex-col gap-2">
        <SheetHeader className="px-2 pt-2">
          <SheetTitle className="text-left font-display font-black">GM Notes</SheetTitle>
          <SheetDescription className="hidden">
            Here you can navigate to different sections of the app.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col flex-1">
          <div>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <HouseIcon /> Start
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <FlameIcon /> Trending
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <EarthIcon /> Discover
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <BookUserIcon /> Friends
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <NotebookTabsIcon /> Following
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="p-2 pt-4 flex-1">
            <h2 className="font-display font-semibold">Communities</h2>
            <ul className="pt-2 space-y-2">
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  <Avatar className="size-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>{" "}
                  D&D
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  <Avatar className="size-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>{" "}
                  T20
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  <Avatar className="size-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>{" "}
                  Candela Obscura
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  <LayoutListIcon /> See all communities
                </Button>
              </li>
            </ul>
          </div>

          <ThemeToggler />
        </div>
      </SheetContent>
    </Sheet>
  )
}
