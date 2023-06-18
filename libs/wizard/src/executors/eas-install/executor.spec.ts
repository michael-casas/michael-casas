import { EasInstallExecutorSchema } from "./schema";
import executor from "./executor";

const options: EasInstallExecutorSchema = {};

describe("EasInstall Executor", () => {
  it("can run", async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
