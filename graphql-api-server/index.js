const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const main_schema = require('./schema')

require('./db/setup')

const app = express()

app.use(cors())

app.use(
  '/api',
  bodyParser.json(),
  graphqlExpress({
    schema: main_schema
  })
)

app.use(
  '/iapi',
  graphiqlExpress({
    endpointURL: '/api'
  })
)

const port = 6699
app.listen(port, () => {
  console.log('Listo, Servidor Node - GraphQL corriendo ...')
})
