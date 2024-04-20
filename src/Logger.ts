/**
 * Logger class for logging messages to the console.
 */
import { Message } from "./Message.ts";

/**
 * Logger class for logging messages to the console.
 */
export class Logger {
  /**
   * Logs the message to the console.
   * @param {Message} message - The message object to be logged.
   */
  log(message: Message) {
    console.log(message.getContent());
  }
}
