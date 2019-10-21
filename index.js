#!/usr/bin/env node

const fs = require('fs')

fs.readFile('./ascii-art.txt', (_, buffer) => {
  process.stdout.write(buffer.toString())
})
