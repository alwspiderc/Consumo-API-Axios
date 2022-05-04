const url = 'http://localhost:5500/api';

// Usuário
const newUser = {
  name: "Olá mundo",
  avatar: "http://lorempixel.com.br/400/200",
  city: "Rio do sul"
}

const userUpdate = {
  name: "Grande Felipe",
  avatar: "http://lorempixel.com.br/400/200",
  city: "Pojuca"
}


// Objeto
const newObjeto = {
  
}

//-------------------------- USUÁRIOS --------------------------//
// READ //
// função para mostrar todos os usuários da API
function getUser() {
  axios.get(url + '/users')
  .then((response) => {
    const data =  response.data;
    console.log(data)
    renderApiResult.textContent = JSON.stringify(data)
  })
  .catch( (error) => {
    console.log(error);
  })
}

//getUser()

// CREATE //
// função apra add um usuário
function addNewUser() {
  axios.post(url + '/users', newUser)
  .then(response => {
    const data = response.data
    alert(data)
  })
  .catch(error => console.log(error));
}

//addNewUser()


// UPDATE //
// função para dar update no usuário
function updateUser() {
  axios.put(`${url}/users/11`, userUpdate)
  .then(response => {
    const data = response.data
    alert(data)
  })
  .catch(error => console.log(error))
}

// updateUser()


// DELETE //
// Função para deletar usuário
function deleteUser() {
  axios.delete(`${url}/users/11`)
  .then(response => {
    const data = response.data
    alert(data)
  })
  .catch(error => console.log(error))
}

//deleteUser()



// função para mostrar apenas 1 usuário da API
function getOneUser() {
  axios.get(`${url}/users/1`)
  .then(response => {
    const data = response.data
    renderApiResult.textContent = JSON.stringify(data)
    
  })
  .catch(error => console.log(error))
}

// getOneUser()



//-------------------------- OBJETO --------------------------//

// READ //
// função para mostrar todos os objetos da API
function getObjetos() {
  axios.get(url + '/objetos')
  .then((response) => {
    const data =  response.data;
    console.log(data)
    renderApiResult.textContent = JSON.stringify(data)
  })
  .catch(error => console.log(error))

}

getObjetos()

// function addNewObjeto() {
//   axios.post(url +'/')
// }