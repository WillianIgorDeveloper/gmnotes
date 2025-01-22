import { Toaster } from "@components/toaster"
import { ThemeProvider } from "@contexts/theme"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AuthProvider } from "./auth"
const queryClient = new QueryClient()

export function GlobalProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}
