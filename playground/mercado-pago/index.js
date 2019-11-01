// SDK de Mercado Pago
const mercadopago = require("mercadopago")
const ACCESS_TOKEN =
  "TEST-726215874038073-102920-6589d297215b9c15e07bbeb680381336-57913797"

// Configura credenciais
mercadopago.configure({
  access_token: ACCESS_TOKEN
})

// Cria um objeto de preferência
let preference = {
  items: [
    {
      title: "Meu produto",
      unit_price: 100,
      quantity: 1
    }
  ]
}

mercadopago.preferences
  .create(preference)
  .then(function(response) {
    // Este valor substituirá a string "$$init_point$$" no seu HTML
    console.log(response.body)
  })
  .catch(function(error) {
    console.log(error)
  })
