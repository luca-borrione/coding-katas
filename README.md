# Coding Questions Practice

A repository for practicing coding questions with JavaScript and Jest.

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

- Each coding question should have its own JavaScript file with the implementation
- Each implementation should have a corresponding `.spec.js` test file
- Example: `src/twoSum.js` and `src/twoSum.spec.js`

## Example

See the example files:

- `src/twoSum.js` - Example implementation
- `src/twoSum.spec.js` - Example test file

## Adding New Questions

1. Create a new `.js` file with your implementation
2. Create a corresponding `.spec.js` file with your tests
3. Run `yarn test` to verify your solution
