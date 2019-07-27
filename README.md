# JSONPrima website

This is the source for [http://jsonprima.surge.sh](http://jsonprima.surge.sh)

- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [License](#license)

## Installation

1. Clone the repository `git clone https://github.com/jsonprima/jsonprima-website.git`
2. Run `yarn` to install dependencies.

## Development

This project is based on `create-react-app` template. See the [official docs](https://facebook.github.io/create-react-app/) for the available scripts.

When you are ready for a new commit run `yarn cm` instead for `git commit`. This script will guide you through an automated process using conventional commits.

## Deployment

1. Run `yarn build` to build the static assets.
2. This project use [surge.sh](https://surge.sh/) for hosting. `cd` into the `build` folder and run `surge`.

## License

The source code is primarily distributed under the terms of the MIT license.

See [LICENSE.md](LICENSE.md) for details.
