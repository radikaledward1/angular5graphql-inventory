module.exports = `
  type Item {
    id: ID!
    item: String!
    catalogo: Catalogo
    cantidad: Int
  }
  
  input NuevoItem {
    item: String!
    catalogo_id: Int
    cantidad: Int
  }
`
