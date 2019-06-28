const chalk = require('chalk')
const moment = require('moment')
const readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
  try {
    console.log(parseLine(line).join('\t'))
  } catch (e) {
    console.error('failed to parse line', line, e)
  }
})

const parseLine = (line) => {
  const parsed = JSON.parse(line)
  switch (parsed[0]) {
    case "Info":
      return renderInfo(parsed)
    case "Action":
      return renderAction(parsed)
    case "Warn":
      return renderWarn(parsed)
    default:
      return parsed
  }
}

const parseTime = line => chalk.white(moment.parseZone(line[1]).format('M/D/YY, HH:mm:ss.SSSS'))

const renderInfo = line => [line[0], parseTime(line), line[2]]

const renderAction = line => [chalk.green(line[0]), parseTime(line), ...renderActionMoreInfo(line[2].match(/type: (\S*):\s+([\s\S]*)/))]

const renderActionMoreInfo = ([_, type, payload]) => [chalk.bold(chalk.green(type)), ...renderActionPayload(JSON.parse(payload))]
const renderActionPayload = ({type, ...rest}) => [chalk.magenta(JSON.stringify(rest))]

const renderWarn = line => [chalk.yellow(line[0]), parseTime(line), chalk.yellow(line[2])]
