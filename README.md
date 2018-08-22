# Express Tortoise

Sometimes Express is a bit too fast when you're working locally. Express Tortoise can be used to slow things down, simulating a production server's response time.

## Features

- Slow down requests using a min/max range
- Enable/disable based on your environment
- Optional logging to display the delay duration for each response
- Small footprint, zero dependencies

## Installation

```
npm install express-tortoise
```

## Usage

```js
const app = require('express')();
const tortoise = require('express-tortoise');

// All params are optional
app.use(tortoise({
  enabled: process.env.NODE_ENV === 'development',
  log: 'Response delayed to simulate production (%s ms)',
  min: 250,
  max: 750
}));
```

## Options

- `enabled` (bool) - Set to true to slow down responses or false to disable the delay, default true.
- `log` (string|false) - If this is a string, a message will be logged to the console with each response. Use `%s` as a placeholder for the delay in ms. Set to false to disable logging.
- `min` (int) - The minimum possible delay in ms, default 250.
- `max` (int) - The maximum possible delay in ms, default 750.

---

<img src="http://read.gov/aesop/images/the-hare-and-the-tortoise.jpg" style="max-width: 300px;">

“The race is not always to the swift.” — [The Hare & the Tortoise](http://read.gov/aesop/025.html)
