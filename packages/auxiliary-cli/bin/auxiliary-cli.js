#!/usr/bin/env node

const init = require('../dist/core.min.js')

const rawArgv = process.argv.slice(2)
const args = require('minimist')(rawArgv)
const command = args._[0]

init(command, args, rawArgv)