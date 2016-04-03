'use strict';
const normalizeAuth = require('dockerode-authconfig');
const join = require('path').join;
const homedir = require('os').homedir;
const readFileSync = require('fs').readFileSync;

function fromFile (path) {
  let auths;
  try {
    auths = normalizeAuth(JSON.parse(readFileSync(path))).auths;
  } catch (_) {
  }
  return auths;
}

function likeDockerClient () {
  return fromFile(join(homedir(), '.docker', 'config.json'));
}

module.exports = {
  likeDockerClient: likeDockerClient,
  fromFile: fromFile
};
