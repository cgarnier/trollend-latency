# trollend-latency
Trollend latency component

# Purpose

Add some latency in a stream to simulate network latency or whatever

# Install

`npm install --save trollend-latency`

# Usage

```
const Latency = require('trollend-latency')

// ...
  .pipe(new Latency({/* strem opts */}).setTimer(2000))
//...
```
