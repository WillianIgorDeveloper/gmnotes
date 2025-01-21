export class EnvironmentError extends Error {
  constructor() {
    super("Environment variable not found or invalid")
    this.name = "EnvironmentError"
  }
}
