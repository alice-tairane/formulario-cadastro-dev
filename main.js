
const url = "http://192.168.0.9:3004/usuario"



function addNewUser(){
    const name = document.getElementById('nome')
    const surname = document.getElementById("sobreNome")
    const email = document.getElementById("email")
    const password = document.getElementById("senha")
    axios.post(url,{
        name : name.value,
        surname: surname.value,
        email: email.value,
        password: password.value
   
    })
    .then(response =>{
        alert(`Cadastro realizado com sucesso ${response.data.name }`)
        name.value = ""
        surname.value = ""
        email.value = ""
        password.value = ""
    })
    .catch(error => alert(error))
   
} 