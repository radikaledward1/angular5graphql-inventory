const { makeExecutableSchema } = require('graphql-tools')

const Item = require('./schemas/Item')
const Catalogo = require('./schemas/Catalogo')

const resolvers = require('./resolvers')

const Types = `
  type Query {
    inventario: [Item]
    catalogos: [Catalogo]
  }

  type Mutation {
    agregarProducto(item: NuevoItem) : Item
  }
`
/*
const resolvers = {

  Query: {

    inventario: () => {
      return [{
        id: 1,
        item: 'Cereal Fruit-Loops 30g',
        cantidad: 30
      }]
    }

  },
  Item: {

    catalogo: () => {
      return {
        id: 3,
        catalogo: 'Abarrotes',
        descripcion: 'Alimentos congelados, perecederos, cereales, enlatados etc.'
      }
    }

  }

}
*/

const schema = makeExecutableSchema({
  typeDefs: [Types, Item, Catalogo],
  resolvers: resolvers
})

module.exports = schema
