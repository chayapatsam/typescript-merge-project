Absolutely, here's the `README.md` file for your TypeScript Merge Project:

**# TypeScript Merge Project**

This project implements a `merge` function written in TypeScript that combines three sorted arrays into a single sorted array in ascending order, without utilizing any built-in sort functions. Unit tests are included using Jest to ensure functionality.

## Table of Contents

* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Testing](#testing)
* [Function Description](#function-description)

## Features

* Merges three arrays:
    * `collection_1` and `collection_2`: Sorted in ascending order from minimum (0) to maximum value.
    * `collection_3`: Sorted in descending order from maximum value to minimum (0).
* Returns a new array containing all elements from the three input arrays, sorted in ascending order.
* Written in TypeScript with unit tests using Jest for code verification.

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/typescript-merge-project.git
   cd typescript-merge-project
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

   This command installs all the necessary dependencies required by the project to function.

3. **Compile TypeScript Code (Optional):**

   ```bash
   npm run build
   ```

   This command compiles the TypeScript code into JavaScript for environments that don't understand TypeScript directly. However, running unit tests or using the code in other TypeScript projects doesn't require this step.

## Usage

The `merge` function can be imported and used within your TypeScript files as follows:

```typescript
import { merge } from './src/merge';

const result = merge([1, 3, 5], [2, 4, 6], [9, 8, 7]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

This code snippet imports the `merge` function from the `src/merge` file and merges three sample arrays. The resulting merged array is then logged to the console.

## Testing

To execute the unit tests written for the `merge` function, use the following command:

```bash
npm test
```

This command runs the tests defined in the `src/__tests__/merge.test.ts` file. These tests ensure the function behaves as expected for various input scenarios.

## Function Description

The `merge` function iterates through all three input arrays simultaneously, comparing the first element from each array in each iteration. The smallest element is then pushed into the resulting array, and the corresponding index of the array containing that element is incremented. This process continues until all elements from all three arrays have been processed, resulting in a single sorted array.

This project provides a well-documented and easy-to-use solution for merging sorted arrays while adhering to the restriction of not using built-in sort functions. The inclusion of unit tests ensures the code's reliability.
