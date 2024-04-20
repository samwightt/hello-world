import { Message } from "./src/Message.ts";
import { LoggerService } from "./src/LoggerService.ts";
import { GREETING } from "./src/Constants.ts";

const message = new Message(GREETING);
const service = new LoggerService();
service.logMessage(message);
