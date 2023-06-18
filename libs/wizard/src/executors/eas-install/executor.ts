import { EasInstallExecutorSchema } from "./schema";

export default async function runExecutor(options: EasInstallExecutorSchema) {
  console.log("Executor ran for EasInstall", options);
  return {
    success: true,
  };
}
