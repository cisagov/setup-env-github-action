import * as core from "@actions/core";
import { toolVersions } from "./versions";

export { run };

async function run() {
  try {
    // Populate the Action outputs with the tool versions
    for (const [key, value] of Object.entries(toolVersions)) {
      core.setOutput(key + "-version", value);
    }
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message);
  }
}
