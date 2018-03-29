const { Model } = require('objection')
const path = require('path')

class Catalogo extends Model {

  static get tableName () {

    return 'catalogos'
  }

}

module.exports = Catalogo
