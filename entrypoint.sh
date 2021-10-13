#!/bin/sh

packer_version=1.7.6
shfmt_version=v3.3.0
terraform_version=1.0.8
terraform_docs_version=v0.16.0

{
  echo "PACKER_VERSION=$packer_version"
  echo "SHFMT_VERSION=$shfmt_version"
  echo "TERRAFORM_VERSION=$terraform_version"
  echo "TERRAFORM_DOCS_VERSION=$terraform_docs_version"
} >> "$GITHUB_ENV"

echo "::set-output name=packer-version::$packer_version"
echo "::set-output name=shfmt-version::$shfmt_version"
echo "::set-output name=terraform-version::$terraform_version"
echo "::set-output name=terraform-docs-version::$terraform_docs_version"
