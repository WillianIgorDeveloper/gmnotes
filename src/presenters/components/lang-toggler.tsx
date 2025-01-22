import { Button } from "@components/button"
import { DropdownMenuContent, DropdownMenuGroup } from "@components/dropdown-menu"
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from "@components/dropdown-menu"
import { Translator } from "@utils"
import { LanguagesIcon } from "lucide-react"
import { useTranslation } from "react-i18next"

export function LangToggler() {
  const { i18n } = useTranslation()

  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <LanguagesIcon size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side="top"
        align="end"
        sideOffset={4}
      >
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => handleChangeLanguage("pt-BR")}
          >
            <Translator path="components.langToggler.ptBR" />
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => handleChangeLanguage("en-US")}
          >
            <Translator path="components.langToggler.enUS" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
