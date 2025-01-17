import { Avatar, AvatarFallback, AvatarImage } from "@components/avatar"
import { Button } from "@components/button"
import { LangToggler } from "@components/lang-toggler"
import { Sheet, SheetContent, SheetDescription } from "@components/sheet"
import { SheetHeader, SheetTitle, SheetTrigger } from "@components/sheet"
import { ThemeToggler } from "@components/theme-toggler"
import { Translator } from "@utils"
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
            <Translator path="components.indexTopBar.sheet.description" />
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col flex-1">
          <div>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <HouseIcon /> <Translator path="components.indexTopBar.sheet.start" />
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <FlameIcon /> <Translator path="components.indexTopBar.sheet.trending" />
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <EarthIcon /> <Translator path="components.indexTopBar.sheet.discover" />
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <BookUserIcon /> <Translator path="components.indexTopBar.sheet.friends" />
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start">
                    <NotebookTabsIcon />{" "}
                    <Translator path="components.indexTopBar.sheet.following" />
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="p-2 pt-4 flex-1">
            <h2 className="font-display font-semibold">
              <Translator path="components.indexTopBar.sheet.communities" />
            </h2>
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
                  <LayoutListIcon /> <Translator path="components.indexTopBar.sheet.seeAll" />
                </Button>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between p-2">
            <LangToggler />
            <ThemeToggler />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
