export class Message {
  constructor(private content: string) {}

  getContent(): string {
    return this.content;
  }

  setContent(newContent: string): void {
    this.content = newContent;
  }
}
