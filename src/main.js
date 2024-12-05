const core = require("@actions/core");
const { toolVersions } = require("./versions");

async function run() {
  try {
    const summaryTable = [
      [
        { data: "Tool", header: true },
        { data: "Version", header: true },
      ],
    ];

    for (const [key, value] of Object.entries(toolVersions)) {
      // Populate the Action outputs with the tool versions
      core.setOutput(key + "-version", value.version);
      // Add a tool and version row to the summary table
      summaryTable.push([value.displayName ?? key, value.version]);
    }

    // Create a summary for the Action
    core.summary.addHeading("Tool versions", 4);
    core.summary.addTable(summaryTable);
    core.summary.write();
  } catch (error) {
    // Fail the workflow run if an error occurs
    core.setFailed(error.message);
  }
}

module.exports = {
  run,
};
