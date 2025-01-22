import { DataError, EnvironmentError, UnauthorizedError, UnexpectedError } from "@errors"
import { toast } from "@hooks/use-toast"
import { env } from "@utils"
import { useTranslation } from "react-i18next"

export function ErrorHandler({ error }: { error: unknown }) {
  const { t } = useTranslation()
  if (env.VITE_ENVIRONMENT === "development") console.log(error)
  switch (true) {
    case error instanceof DataError:
      toast({ title: t(error.message) })
      break

    case error instanceof UnauthorizedError:
      toast({ variant: "destructive", title: t(error.message) })
      break

    case error instanceof EnvironmentError:
      toast({ variant: "destructive", title: t(error.message) })
      break

    case error instanceof UnexpectedError:
      toast({ variant: "destructive", title: t(error.message), description: error.code })
      break

    default:
      toast({ variant: "destructive", title: t("error.unexpected") })
      break
  }
}
