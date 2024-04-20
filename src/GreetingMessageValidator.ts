import { Message } from "./Message.ts";
import { GREETING } from "./Constants.ts";

/**
 * A validator class for greeting messages.
 */
export class GreetingMessageValidator {
  /**
   * Checks if a message is a valid greeting message.
   * @param message The message to validate.
   * @returns True if the message is a valid greeting message, false otherwise.
   */
  static isValid(message: Message): boolean {
    return message.getContent() === GREETING;
  }
}
