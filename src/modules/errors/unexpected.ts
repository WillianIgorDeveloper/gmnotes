export class UnexpectedError extends Error {
  public code: string
  constructor(code?: string) {
    super("error.unexpected")
    this.code = code ?? "unexpected"
    this.name = "UnexpectedError"
  }
}
