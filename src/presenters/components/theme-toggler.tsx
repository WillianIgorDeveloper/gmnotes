import { ToggleGroup, ToggleGroupItem } from "@components/toggle-group"
import { useTheme } from "@contexts/theme"
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"

export function ThemeToggler() {
  const { setTheme, theme } = useTheme()
  return (
    <ToggleGroup type="single" value={theme} onValueChange={setTheme}>
      <ToggleGroupItem value="system" aria-label="System">
        <MonitorIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Dark">
        <MoonIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="light" aria-label="Light">
        <SunIcon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
