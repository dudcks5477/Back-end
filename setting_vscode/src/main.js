// @ts-check
// Formatting, Linting, Type Checking
// Formatting: Prettier
// Linting: ESLint
// Type checking : TypeScript

const http = require('http')
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('Hello!')
})

const PORT = 4000
server.listen(PORT, () => {
  console.log(`The Server is listening at port ${PORT}.`)
})
