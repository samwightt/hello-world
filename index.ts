import { Message } from "./src/Message.ts";
import { LoggerService } from "./src/LoggerService.ts";

const message = new Message("Hello, world!");
const service = new LoggerService();
service.logMessage(message);
