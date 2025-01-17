import { useTranslation } from "react-i18next"

export function Translator({ path }: { path: string }) {
  const { t } = useTranslation()
  return t(path)
}
