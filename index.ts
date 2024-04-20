import { Message } from "./src/Message.ts";
import { LoggerService } from "./src/LoggerService.ts";
import { GREETING } from "./src/Constants.ts";
import { GreetingMessageValidator } from "./src/GreetingMessageValidator.ts";

const message = new Message(GREETING);
const service = new LoggerService();

if (GreetingMessageValidator.isValid(message)) {
  service.logMessage(message);
}
