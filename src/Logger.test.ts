import { Logger } from "./Logger.ts";
import { assertEquals } from "std/assert/mod.ts";
import {
  assertSpyCallArg,
  assertSpyCalls,
  restore,
  stub,
} from "std/testing/mock.ts";
import { describe, it, afterEach } from "std/testing/bdd.ts";

describe("Logger", () => {
  afterEach(() => restore());

  it("logs the correct message", () => {
    const logger = new Logger("Hello, world!");
    assertEquals(logger.message, "Hello, world!");
  });

  it("log method works correctly", () => {
    const logger = new Logger("Hello, world!");
    const consoleSpy = stub(console, "log");
    logger.log();
    assertSpyCallArg(consoleSpy, 0, 0, "Hello, world!");
  });

  // New test to check if the Logger can change its message
  it("can change its message", () => {
    const logger = new Logger("Initial message");
    logger.message = "Updated message";
    assertEquals(logger.message, "Updated message");
  });

  it("log method is called the correct number of times", () => {
    const logger = new Logger("Message to log");
    const consoleSpy = stub(console, "log");
    logger.log();
    logger.log();
    assertSpyCalls(consoleSpy, 2); // Expect console.log to have been called twice
  });
});
