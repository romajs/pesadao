#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const file = path.join(__dirname, './ascii-art.txt')
const art = fs.readFileSync(file, 'utf8').replace(/\s+$/, '')
const args = process.argv.slice(2)

if (args.includes('--help') || args.includes('-h')) {
  process.stdout.write('Uso: pesadao [--animate|-a]\n')
} else if (args.includes('--animate') || args.includes('-a')) {
  animate()
} else {
  process.stdout.write(`${art}\n`)
}

function animate () {
  const frames = require('./ascii-frames.json')
  let frame = 0

  process.stdout.write('\u001b[2J\u001b[?25l')

  const timer = setInterval(() => {
    process.stdout.write(`\u001b[H${frames[frame % frames.length]}\u001b[J`)
    frame += 1

    if (frame === frames.length * 2) finish()
  }, 100)

  function finish () {
    clearInterval(timer)
    process.stdout.write('\u001b[?25h')
  }

  process.once('SIGINT', () => {
    finish()
    process.exit(130)
  })
}
