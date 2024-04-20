/**
 * Represents a message with content that can be get and set.
 */
export class Message {
  /**
   * Initializes a new instance of the Message class with the specified content.
   * @param {string} content - The content of the message.
   */
  constructor(private content: string) {}

  /**
   * Retrieves the content of the message.
   * @returns {string} The current content of the message.
   */
  getContent(): string {
    return this.content;
  }

  /**
   * Updates the content of the message.
   * @param {string} newContent - The new content to set for the message.
   */
  setContent(newContent: string): void {
    this.content = newContent;
  }
}
