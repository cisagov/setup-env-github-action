/**
 * This object tracks the versions of the tools we commonly use in our GitHub
 * Actions workflows. Each key is the prefix of the output variable we want to
 * set such that the output is called <prefix>-version, and the value is the
 * version of the tool we use.
 */
const toolVersions = {
  go: "1.26",
  "go-critic": "v0.14.3",
  "go-junit-report": "v2.1.0",
  goimports: "v0.45.0",
  gomock: "v1.6.0",
  gosec: "v2.27.1",
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
  packer: "1.9.5",
  /**
   * Note that any change to the Python version made here must also be
   * made to the language_version attribute of the ansible-lint
   * pre-commit hook in cisagov/skeleton-generic[1].
   *
   * [1]:
   * https://github.com/cisagov/skeleton-generic/blob/c5c809b6319b96c8a3a4bc04707c4fed9b25c98b/.pre-commit-config.yaml#L237
   */
  python: "3.13",
  shfmt: "v3.13.1",
  staticcheck: "v0.7.0",
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
  terraform: "1.5.7",
  "terraform-docs": "v0.24.0",
};

module.exports = {
  toolVersions,
};
