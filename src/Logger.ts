/**
 * Logger class for logging messages to the console.
 */
import { Message } from "./Message.ts";

/**
 * Logger class for logging messages to the console.
 */
export class Logger {
  /**
   * Creates an instance of Logger.
   * @param {Message} message - The message object to be logged.
   */
  constructor(private message: Message) {}

  /**
   * Logs the message to the console.
   */
  log() {
    console.log(this.message.getContent());
  }
}
