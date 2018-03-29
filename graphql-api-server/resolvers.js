const Item = require('./models/Item')
const Catalogo = require('./models/Catalogo')

const resolvers = {

  Query: {

    inventario: () => Item.query().eager('[catalogo]')
  }

}

module.exports = resolvers
