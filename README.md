# Coding Katas

A repository for practicing coding katas with JavaScript and Jest.

## Setup

Install dependencies:

```bash
yarn
```

## Usage

### Running Tests

Run all tests:

```bash
yarn test
```

Run tests in watch mode (automatically re-runs on file changes):

```bash
yarn test:watch
```

Run tests with coverage report:

```bash
yarn test:coverage
```

## Structure

- Each kata should live in `exercises/` (for example `exercises/js/...`)
- Each implementation should have a corresponding `.spec.js` test file

## Adding New Katas

1. Create a new `.js` file under `exercises/js` with your implementation
2. Create a corresponding `.spec.js` file with your tests
3. Run `yarn test` to verify your solution
