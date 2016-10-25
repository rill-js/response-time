<h1 align="center">
  <!-- Logo -->
  <img src="https://raw.githubusercontent.com/rill-js/rill/master/Rill-Icon.jpg" alt="Rill"/>
  <br/>
  @rill/response-time
	<br/>

  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-brightgreen.svg?style=flat-square" alt="API stability"/>
  </a>
  <!-- Standard -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard"/>
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/@rill/response-time">
    <img src="https://img.shields.io/npm/v/@rill/response-time.svg?style=flat-square" alt="NPM version"/>
  </a>
  <!-- Downloads -->
  <a href="https://npmjs.org/package/@rill/response-time">
    <img src="https://img.shields.io/npm/dm/@rill/response-time.svg?style=flat-square" alt="Downloads"/>
  </a>
  <!-- Gitter Chat -->
  <a href="https://gitter.im/rill-js/rill">
    <img src="https://img.shields.io/gitter/room/rill-js/rill.svg?style=flat-square" alt="Gitter Chat"/>
  </a>
</h1>

<div align="center">
  Automatically set an `X-Response-Time` header for all requests in Rill.
</div>

## Installation

```console
npm install @rill/response-time
```

## Example

```js
const rill = require('rill')
const app = rill()
const responseTime = require('@rill/response-time')

// Best to use before all other middleware.
app.use(responseTime())
```

### Contributions

* Use `npm test` to run tests.

Please feel free to create a PR!
