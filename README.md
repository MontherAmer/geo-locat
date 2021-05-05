# geo-locat

##### get country of geo point

## About

geo-locat allows you to check in which country your [latitude, longitude] point is

- check if the point is in a specific country
- check what country the point is located in
  Markdown! To get a feel
  for Markdown's syntax, type some text into the left window and
  watch the results in the right.

## Installation

geo-locat requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```
npm install geo-locat
```

## usage

```
// commonjs module
const {check, isIn} = require('goe-locat');
// es module
import {check, isIn} from 'geo-locat';

check([31.279862, 37.1297454]) // returns { name: 'Jordan', code: 'JO' }
isIn([31.279862, 37.1297454],'jordan') // returns true
isIn([31.279862, 37.1297454],'JO') // returns true
```

## License

MIT

**Free Software, Hell Yeah!**
