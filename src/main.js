const core = require("@actions/core");
const { version } = require("../package.json");
const { toolVersions } = require("./versions");

async function run() {
  try {
    // Populate the Action outputs with the action version and tool versions
    core.setOutput("action-version", version);
    for (const [key, value] of Object.entries(toolVersions)) {
      core.setOutput(key + "-version", value);
    }
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message);
  }
}

module.exports = {
  run,
};
