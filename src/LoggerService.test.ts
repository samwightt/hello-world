import { LoggerService } from "./LoggerService.ts";
import { Logger } from "./Logger.ts";
import { Message } from "./Message.ts";
import {
  assertSpyCallArg,
  assertSpyCalls,
  restore,
  stub,
} from "std/testing/mock.ts";
import { describe, it, afterEach } from "std/testing/bdd.ts";

describe("LoggerService", () => {
  afterEach(() => restore());

  it("logMessage method works correctly", () => {
    const mockLogger = new Logger();
    const loggerSpy = stub(mockLogger, "log");
    const loggerService = new LoggerService(mockLogger);
    const message = new Message("Test message");

    loggerService.logMessage(message);

    assertSpyCallArg(loggerSpy, 0, 0, "Test message");
  });

  it("logMessage method is called the correct number of times", () => {
    const mockLogger = new Logger();
    const loggerSpy = stub(mockLogger, "log");
    const loggerService = new LoggerService(mockLogger);
    const message = new Message("Another test message");

    loggerService.logMessage(message);
    loggerService.logMessage(message);

    assertSpyCalls(loggerSpy, 2); // Expect logger.log to have been called twice
  });
});
