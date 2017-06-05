import * as express from 'express'
import * as faker from 'faker'
import { range } from 'lodash'
const bodyParser = require('body-parser')

const app = express()

const user = () => ({
  profileImg: faker.image.avatar(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  dob: faker.date.past(30, '10/10/2000'),
  id: 0
})

let users = range(0, 153).map(index => Object.assign(user(), { id: index }))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "DELETE, GET, POST, PUT, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

  next()
})
app.use(bodyParser.json())

app.get('/users', (request, response) => {
  return response.send(users)
})

app.put('/users/:id', (request, response) => {
  const userId = +request.params['id']
  const user = users.find(user => userId === user.id)

  if (user) {
    delete request.body.id
    Object.assign(user, request.body)
    return response.send(201, user)
  }

  return response.sendStatus(404)
})

app.delete('/users/:id', (request, response) => {
  const userId = +request.params['id']
  const filteredUsers = users.filter(user => userId !== user.id)

  if (filteredUsers.length !== users.length) {
    users = filteredUsers
    return response.sendStatus(204)
  }

  return response.sendStatus(404)
})


const port = 8090
app.listen(port, () =>
  console.log(`Mock API server up & running on ${port}`)
)