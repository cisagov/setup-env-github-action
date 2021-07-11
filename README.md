# setup-env-github-action #

[![GitHub Build Status](https://github.com/cisagov/setup-env-github-action/workflows/build/badge.svg)](https://github.com/cisagov/setup-env-github-action/actions)

A [GitHub Action](https://github.com/features/actions) to setup a common environment
for our workflows.

## Inputs ##

None

## Outputs ##

| Name              | Description |
|-------------------|-------------|
| PACKER_VERSION    | The version of [Packer](https://packer.io) to use. |
| TERRAFORM_VERSION | The version of [Terraform](https://terraform.io) to use. |

## Usage ##

```yaml
name: CI
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: cisagov/setup-env-github-action@develop
```

## Contributing ##

We welcome contributions!  Please see [`CONTRIBUTING.md`](CONTRIBUTING.md) for
details.

## License ##

This project is in the worldwide [public domain](LICENSE).

This project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain
dedication](https://creativecommons.org/publicdomain/zero/1.0/).

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.
