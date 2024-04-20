import { assertEquals } from "std/assert/mod.ts";

Deno.test("outputs hello world", async () => {
  const command = new Deno.Command(Deno.execPath(), {
    args: ["run", "./index.ts"],
  });

  const { stdout } = await command.output();

  // UIntArray to string
  const output = new TextDecoder().decode(stdout);
  assertEquals(output, "Hello, world!\n");
});
