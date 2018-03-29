module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'root',
      database : 'inventarios',
      port: '8889'
    }
  },

  production: {
    // Acá irían los datos para la conexión
    // en un ambiente de producción
  }

}
