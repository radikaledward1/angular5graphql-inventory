const Item = require('./models/Item')
const Catalogo = require('./models/Catalogo')

const resolvers = {

  Query: {

    inventario: () => Item.query().eager('[catalogo]'),
    catalogos: () => Catalogo.query()
  },
  Mutation: {
    agregarProducto: (_, args) => {
      //return Item.query().insert({item: args.item, catalogo_id: args.catalogo, cantidad: args.cantidad})
      return Item.query().insert(args.item)
    },
    removerProducto: (_, args) => {
      return Item.query().findById(args.item).then((item) => {
        return Item.query().deleteById(args.item).then(() => item)
      })
    }
  }

}

module.exports = resolvers
