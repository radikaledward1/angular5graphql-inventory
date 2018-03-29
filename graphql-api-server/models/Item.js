const { Model } = require('objection')
const path = require('path')

class Item extends Model {

  static get tableName () {
    
    return 'inventario'
  }

  static get relationMappings() {

    return {

      catalogo: {

        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/Catalogo'),
        join: {
          from: 'inventario.catalogo_id',
          to: 'catalogos.id'
        }

      }

    }

  }

}

module.exports = Item
