const express = require('express')
const cors = require('cors')

const app = express()

app.listen(5500, () => console.log('Rodando na porta 5500'))

app.use(cors())

app.use(express.json())

let users = [
  
{
  id: 1,
  name: "Jakeliny Gracielly",
  avatar: "https://avatars.githubusercontent.com/u/17316392?v=4",
  city: "São Paulo"
},
{
  id: 2,
  name: "Ester",
  avatar: "https://avatars.githubusercontent.com/u/57070379?v=4",
  city: "Salvador"
},

{
  id: 3,
  name: "Felipe",
  avatar: "https://avatars.githubusercontent.com/u/81594604?v=4",
  city: "Salvador"
},


]

let objetos = [
  
  {
    id: 1,
    name: "caneta",

  },
  {
    id: 2,
    name: "celular",

  },
  
  {
    id: 3,
    name: "bola",

  },
  
  ]



app.route('/api/users').get((req, res) => res.json({
  users
}))

app.route('/api/users/:id').get((req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User nor found!')
  }

  res.json(user)
})



app.route('/api/objetos').get((req, res) => res.json({
  objetos
}))

app.route('/api/objetos:id').get((req, res) => {
  const userId = req.params.id

  const user = objetos.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User nor found!')
  }

  res.json(user)
})



app.route('/api/users').post((req, res) => {
  const lastId = users[users.length - 1].id
  users.push({
    id: lastId + 1,
    name: req.body.name,
    avatar: req.body.avatar,
    city: req.body.city
  })
  res.json('Saved user')
})

app.route('/api/users/:id').put((req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) {
    return res.json('User nor found!')
  }

  const updatedUser = {
    ...user,
    name: req.body.name,
    avatar: req.body.avatar,
    city: req.body.city
  }

  users = users.map(user => {
    if (Number(user.id) === Number(userId)) {
      user = updatedUser
    }
    return user
  })

  res.json("Updated user")
})

app.route('/api/users/:id').delete((req, res) => {
  const userId = req.params.id

  users = users.filter(user => Number(user.id) !== Number(userId))

  res.json('Deleted User')
})