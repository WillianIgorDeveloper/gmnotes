import Translator from "@/utils/lang/translator"
import { DropdownMenuContent, DropdownMenuGroup } from "@components/dropdown-menu"
import { DropdownMenuItem, DropdownMenuTrigger, DropdownMenu } from "@components/dropdown-menu"
import { LanguagesIcon } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Button } from "@components/button"

export function LangToggler() {
  const { i18n } = useTranslation()

  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <LanguagesIcon size={16} />
          <Translator path="components.langToggler.title" />
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
