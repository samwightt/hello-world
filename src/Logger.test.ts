import { Logger } from "./Logger.ts";
import {
  assertSpyCallArg,
  assertSpyCalls,
  restore,
  stub,
} from "std/testing/mock.ts";
import { describe, it, afterEach } from "std/testing/bdd.ts";
import { Message } from "./Message.ts";

describe("Logger", () => {
  afterEach(() => restore());

  it("log method works correctly", () => {
    const message = new Message("Hello, world!"); // Adjusting based on the instructions
    const logger = new Logger(message);
    const consoleSpy = stub(console, "log");
    logger.log();
    assertSpyCallArg(consoleSpy, 0, 0, "Hello, world!");
  });

  it("log method is called the correct number of times", () => {
    const message = new Message("Message to log"); // Adjusting based on the instructions
    const logger = new Logger(message);
    const consoleSpy = stub(console, "log");
    logger.log();
    logger.log();
    assertSpyCalls(consoleSpy, 2); // Expect console.log to have been called twice
  });
});
