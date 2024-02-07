# compshop

> A tool for comparing CVS prices with our competitors.

## 📖 Table of Contents

- [Commands](#-commands)
- [Installing](#-installing)
    - [Prerequisites](#prerequisites)
- [Getting Started](#-getting-started)
- [Building for Production](#-building-for-production)

## 📣 Commands

The following commands are available from the root of the project:

```shell
# Builds the app for production
build

# Compiles Tailwind styles into a CSS file
build:tailwind

# Starts the development server
dev

# Runs ESLint rules
lint

# Runs the production build and serves the app
start
```

## 💻 Installing

### Prerequisites

- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/installation)

> Note: This project uses `pnpm` as its package manager.
> Do not use `npm` or `yarn` as this will generate duplicate lockfiles and may lead to unexpected behavior for other developers.

Install the dependencies with the following command:

```shell
pnpm install
```

## ⌨️ Getting Started

### Environment variables
Environment variables are stored in the accompanying `.env` file.  Any new values should be placed there.

### Starting the development server
From there you can start the development server with the following command from the root of the repo:

```shell
pnpm dev
```

## 📦 Building for production

You can build the project with the following command from the root of the repo:

```shell
pnpm build
```

This will generate a `.next` folder with the compiled files.
Then you can serve up the production build locally or in a deployed environment using this command:

```shell
pnpm start
```
