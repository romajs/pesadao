#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const file = path.join(__dirname, './ascii-art.txt')

fs.readFile(file, (_, buffer) => process.stdout.write(buffer.toString()))
