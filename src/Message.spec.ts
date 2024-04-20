import { Message } from "./Message.ts";
import { assertEquals } from "std/assert/mod.ts";
import { describe, it } from "std/testing/bdd.ts";

describe("Message", () => {
  it("returns its content", () => {
    const message = new Message("Initial content");
    assertEquals(message.getContent(), "Initial content");
  });

  it("updates its content", () => {
    const message = new Message("Initial content");
    message.setContent("Updated content");
    assertEquals(message.getContent(), "Updated content");
  });

  it("allows content to be empty", () => {
    const message = new Message("");
    assertEquals(message.getContent(), "");
    message.setContent("");
    assertEquals(message.getContent(), "");
  });

  it("maintains content type as string", () => {
    const message = new Message("100");
    message.setContent("200");
    assertEquals(typeof message.getContent(), "string");
  });

  it("handles special characters", () => {
    const specialChars = "!@#$%^&*()_+{}:\"<>?[];',./`~";
    const message = new Message(specialChars);
    assertEquals(message.getContent(), specialChars);
  });

  it("handles long strings", () => {
    const longString = "a".repeat(10000); // 10,000 characters long
    const message = new Message(longString);
    assertEquals(message.getContent(), longString);
  });
});
