import { Logger } from "./src/Logger.ts";
import { Message } from "./src/Message.ts";

const message = new Message("Hello, world!");
const logger = new Logger(message);
logger.log();
