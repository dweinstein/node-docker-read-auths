[![NPM](https://nodei.co/npm/docker-read-auths.png?downloads=true)](https://nodei.co/npm/docker-read-auths/)

[![npm version](https://badge.fury.io/js/docker-read-auths.svg)](http://badge.fury.io/js/docker-read-auths)
# SYNOPSIS

Read auth / registry tokens like the official docker client.

# USAGE

```js
const auth = require('.');

const a = auth.fromFile('/path/to/config.json');

const b = auth.likeDockerClient();
```
