# setup-env-github-action #

[![GitHub Build Status](https://github.com/cisagov/setup-env-github-action/workflows/build/badge.svg)](https://github.com/cisagov/setup-env-github-action/actions)

A [GitHub Action](https://github.com/features/actions) to setup a common environment
for our workflows.

## Inputs ##

None

## Outputs ##

| Name              | Description |
|-------------------|-------------|
| go-version | The version (major.minor) of [Go](https://github.com/golang/go) to use. |
| go-critic-version | The version of [go-critic](https://github.com/go-critic/go-critic) to use. |
| go-junit-report-version | The version of [go-junit-report](https://github.com/jstemmer/go-junit-report) to use. |
| goimports-version | The version of [goimports](https://pkg.go.dev/golang.org/x/tools/cmd/goimports) to use. |
| gomock-version | The version of [GoMock](https://github.com/golang/mock) to use. |
| gosec-version | The version of [gosec](https://github.com/securego/gosec) to use. |
| packer-version | The version of [Packer](https://packer.io) to use. |
| python-version | The version (major.minor) of [Python](https://github.com/python/cpython) to use. |
| shfmt-version | The version of [shfmt](https://github.com/mvdan/sh#shfmt) to use. |
| staticcheck-version | The version of [staticcheck](https://github.com/dominikh/go-tools/tree/master/cmd/staticcheck) to use. |
| terraform-version | The version of [Terraform](https://terraform.io) to use. |
| terraform-docs-version | The version of [terraform-docs](https://github.com/terraform-docs/terraform-docs) to use. |

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
