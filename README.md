# 🧰 tiny-js-ulti

> A lightweight JavaScript utility library providing handy functions for daily development.


<p align="center">
  <a href="https://www.npmjs.com/package/tiny-js-ulti">
    <img src="https://img.shields.io/npm/v/tiny-js-ulti.svg" alt="npm version">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
  </a>
  <a href="https://github.com/yourname/tiny-js-ulti/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/yourname/tiny-js-ulti/ci.yml?branch=main" alt="Build Status">
  </a>
  <a href="https://codecov.io/gh/yourname/tiny-js-ulti">
    <img src="https://img.shields.io/codecov/c/github/yourname/tiny-js-ulti/main.svg" alt="Coverage">
  </a>
</p>

---



## 🎨 Features (Current Version):

- Array Methods: range

- String Methods: truncate

- Function Methods: debounce

## 📦 Installation

```bash
npm install tiny-js-ulti
# or
yarn add tiny-js-ulti
```

## 👔 Usage

Before using it, you need to import the desired methods from jstoolpack:

```js
import { range, truncate, debounce } from "jstoolpack";
```

Then you can start using them right away.
Here are some usage examples:

```js
range;
range(0, 5); // [0, 1, 2, 3, 4]
range(1, 5); // [1, 2, 3, 4]
range(0, 5, 2); // [0, 2, 4]

truncate;
truncate("Hello, world!", 5); // 'He...'
truncate("Hello, world!", 8); // 'Hello...'
truncate("Hello, world!", 20); // 'Hello, world!'

debounce;
const fn = debounce(() => console.log("Hello, world!"), 1000);
fn(); // Not executed immediately
fn(); // Not executed immediately
fn(); // Not executed immediately
// After 1000 ms, 'Hello, world!' will be logged only once
```

## 📜 Changelog

All notable changes are documented in the [CHANGELOG.md](./CHANGELOG.md). This project follows the Keep a Changelog format.

## 🤝 Contributing

If you encounter any issues while using tiny-js-ultik, or if you have any suggestions or ideas, feel free to open an issue or submit a pull request on [GitHub](https://github.com/guoliang724/npm-tiny-js-utils).

## 📝 License

tiny-js-ulti is released under the MIT License. For more details, please refer to the [LICENSE](./LICENSE) file.


