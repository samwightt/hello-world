import { Message } from "./Message.ts";
import { GREETING } from "./Constants.ts";

export class GreetingMessageValidator {
  static isValid(message: Message): boolean {
    return message.getContent() === GREETING;
  }
}
