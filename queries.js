const Pool = require('pg').Pool
const pool = new Pool({
user: 'vyxgnppokdwvqi',
host: 'ec2-34-205-209-14.compute-1.amazonaws.com',
database: 'd2c4ebai7v2e9b',
password: '5da57ee2ec4d379bb15999a6522d23566e9ecb038699709f98100badf677e45c',
port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM public.accounts', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM public.accounts WHERE user_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const {id,name,pass,email,create,last} = request.body
  pool.query('INSERT INTO public.accounts (user_id,username,password,email,created_on,last_login) VALUES ($1, $2, $3, $4, $5 ,$6)', [id,name,pass ,email,create,last], (error, results) => {
    if (error) {
      response.status(201).send({"respon":"1",
      "mensaje":error.message,
    })
    }else{
      response.status(201).send({"respon":"0",
      "mensaje":"Ok",
    })
    }
    
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body
  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}