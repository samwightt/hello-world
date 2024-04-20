import { assertEquals } from "std/assert/mod.ts";
import { describe, it } from "std/testing/bdd.ts";
import { GreetingMessageValidator } from "./GreetingMessageValidator.ts";
import { Message } from "./Message.ts";
import { GREETING } from "./Constants.ts";
describe("GreetingMessageValidator", () => {
  it("validates a correct greeting message", () => {
    const message = new Message(GREETING);
    assertEquals(GreetingMessageValidator.isValid(message), true);
  });

  it("invalidates an incorrect greeting message with different text", () => {
    const message = new Message("Goodbye, world!");
    assertEquals(GreetingMessageValidator.isValid(message), false);
  });

  it("invalidates an empty message", () => {
    const message = new Message("");
    assertEquals(GreetingMessageValidator.isValid(message), false);
  });

  it("invalidates a null message", () => {
    const message = new Message(null as unknown as string);
    assertEquals(GreetingMessageValidator.isValid(message), false);
  });

  it("invalidates a message with only whitespace", () => {
    const message = new Message("   ");
    assertEquals(GreetingMessageValidator.isValid(message), false);
  });

  it("validates a message with the correct greeting and additional whitespace", () => {
    const message = new Message("  Hello, world!  ");
    assertEquals(GreetingMessageValidator.isValid(message), false);
  });

  it("invalidates a message with the correct greeting but additional characters", () => {
    const message = new Message("Hello, world!?");
    assertEquals(GreetingMessageValidator.isValid(message), false);
  });
});
