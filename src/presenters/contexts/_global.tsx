import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient()

export function GlobalProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
