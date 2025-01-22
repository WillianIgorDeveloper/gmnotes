export class DataError extends Error {
  constructor(message?: string) {
    super(message ?? "error.data")
    this.name = "DataError"
  }
}
