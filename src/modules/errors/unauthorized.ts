export class UnauthorizedError extends Error {
  public code: string
  constructor(code?: string) {
    super("error.unauthorized")
    this.code = code ?? "unauthorized"
    this.name = "UnauthorizedError"
  }
}
