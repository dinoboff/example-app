#!/usr/bin/env node
'use strict';

/**
 * Run example-app unit tests.
 */

// dependencies
const exec = require('../lib/exec.js');
const path = require('path');
const sh = require('shelljs');

// exit on error
sh.set('-e');

// paths
const src = 'example-app/example-app.specs.js';
const dist = '_test';
const output = path.join(dist, 'test.js');


// Setup
const artifacts = [dist].filter(dir => sh.test('-d', dir));

if (artifacts.length > 0) {
  sh.echo(`Removing ${artifacts.map(dir => `"${dir}/"`).join(', ')}...`);
  sh.rm('-r', artifacts);
}

sh.echo(`Setting up "${dist}/"...`);
sh.mkdir('-p', dist);


// Transcode tests to a nodejs module.
sh.echo(`Transcoding and bundling tests to "${output}"...`);
exec(`jspm build ${src} "${output}" --skip-rollup --format cjs`);


// Run them with mocha (a nodejs test runner).
sh.echo('Running tests...');
exec(`mocha -b --require source-map-support/register "${output}"`);