const core = require("@actions/core");
const { toolVersions } = require("./versions");

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

module.exports = {
  run,
};
