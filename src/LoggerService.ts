import { Logger } from "./Logger.ts";
import { Message } from "./Message.ts";

/**
 * LoggerService class for handling message logging through a Logger instance.
 * This service acts as a middleman between the application and the Logger,
 * providing a layer of abstraction that could be used for additional processing
 * or routing of messages before they are logged.
 */
export class LoggerService {
  /**
   * Creates an instance of LoggerService.
   * @param {Logger} logger - The Logger instance used for logging messages.
   */
  constructor(private logger: Logger = new Logger()) {}

  /**
   * Logs a message using the Logger instance.
   * This method takes a Message object, which can then be passed to the Logger's log method.
   * It serves as a straightforward way to log messages, with the potential for expansion.
   * @param {Message} message - The message object to be logged.
   */
  logMessage(message: Message) {
    this.logger.log(message.getContent());
  }
}
