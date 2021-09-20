#!/bin/sh

packer_version=1.7.3
shfmt_version=v3.3.0
terraform_version=0.14.11
terraform_docs_version=v0.14.1

{
  echo "PACKER_VERSION=$packer_version"
  echo "SHFMT_VERSION=$shfmt_version"
  echo "TERRAFORM_VERSION=$terraform_version"
  echo "TERRAFORM_DOCS_VERSION=$terraform_docs_version"
} >> "$GITHUB_ENV"
