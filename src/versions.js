/**
 * This object tracks the versions of the tools we commonly use in our GitHub
 * Actions workflows. Each key is the prefix of the output variable we want to
 * set such that the output is called <prefix>-version, and the value is the
 * version of the tool we use.
 */
const toolVersions = {
  go: { displayName: "Go", version: "1.22" },
  "go-critic": { version: "v0.11.3" },
  "go-junit-report": { version: "v2.1.0" },
  goimports: { version: "v0.20.0" },
  gomock: { displayName: "GoMock", version: "v1.6.0" },
  gosec: { displayname: "GoSec", version: "v2.19.0" },
  /**
   * We are choosing to remain on v1.9 due to HashiCorp's decision to change
   * the license of Packer from MPL 2.0 to BSL starting with 1.10.0. This is
   * done for several reasons:
   * - The Business Source License (BSL/BUSL) is not considered an Open Source
   *   license.
   * - The Cloud Native Computing Foundation (CNCF) recommends considering
   *   alternative components if a project uses a component under the BUSL-1.1
   *   license.
   * - This mirrors the same decision being made for Terraform (below) which
   *   has additional reasons for being held back.
   */
  packer: { displayName: "Packer", version: "1.9.5" },
  python: { displayName: "Python", version: "3.12" },
  shfmt: { version: "v3.8.0" },
  staticcheck: { displayName: "Staticcheck", version: "v0.4.7" },
  /**
   * We are choosing to remain on v1.5 due to HashiCorp's decision to change
   * the license of Terraform from MPL 2.0 to BSL starting with 1.6.0. This is
   * done for several reasons:
   * - The Business Source License (BSL/BUSL) is not considered an Open Source
   *   license.
   * - We may have issues around compatibility with Terraform 1.6+ if we
   *   leverage non-HashiCorp tooling.
   * - We may decide to switch to OpenTofu in the future and compatibility is
   *   only guaranteed with Terraform 1.5 and below.
   * - The Cloud Native Computing Foundation (CNCF) recommends considering
   *   alternative components if a project uses a component under the BUSL-1.1
   *   license.
   */
  terraform: { displayName: "Terraform", version: "1.5.7" },
  "terraform-docs": { version: "v0.17.0" },
};

module.exports = {
  toolVersions,
};
