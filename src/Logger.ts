/**
 * Logger class for logging messages to the console.
 */
export class Logger {
  /**
   * Creates an instance of Logger.
   * @param {string} message - The message to be logged.
   */
  constructor(public message: string) {}

  /**
   * Logs the message to the console.
   */
  log() {
    console.log(this.message);
  }
}
