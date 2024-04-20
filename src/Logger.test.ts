import { Logger } from "./Logger.ts";
import {
  assertSpyCallArg,
  assertSpyCalls,
  restore,
  stub,
} from "std/testing/mock.ts";
import { describe, it, afterEach } from "std/testing/bdd.ts";

describe("Logger", () => {
  afterEach(() => restore());

  it("log method works correctly", () => {
    const messageText = "Hello, world!"; // Adjusted to use a string directly
    const logger = new Logger();
    const consoleSpy = stub(console, "log");
    logger.log(messageText);
    assertSpyCallArg(consoleSpy, 0, 0, messageText);
  });

  it("log method is called the correct number of times", () => {
    const messageText = "Message to log"; // Adjusted to use a string directly
    const logger = new Logger();
    const consoleSpy = stub(console, "log");
    logger.log(messageText);
    logger.log(messageText);
    assertSpyCalls(consoleSpy, 2); // Expect console.log to have been called twice
  });
});
