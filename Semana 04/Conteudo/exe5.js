/*

2. Levando em consideração o array de usuários abaixo: 
[{id: 3, name: “joao”, active: false}, {id: 2, name: “gabriel” active: false}, {id: 1, name: “mari”, active: true}, {id: 0, name: “miguel”, active: false}]

Escreva um programa que imprime na tela o nome de todos os usuários ativos
Escreva um programa que imprime na tela quantos usuários não estão ativos
Escreva um programa que imprime na tela se existe algum usuário ativo
Escreva um programa que imprime na tela o array ordenado por id em ordem crescente
*/


const users = [{id: 3, name: "joao", active: false}, {id: 2, name: "gabriel" ,active: false}, {id: 1, name: "mari", active: true}, {id: 0, name: "miguel", active: false}]


const usersActive = users.filter(user => {
    return user.active === true})




const usersDesactive = users.filter(user => {
  
    return user.active === false 
   
})

const someUsersActive = users.some(user => {
    return user.active === true})


    const orderedArray = users.sort((a,b) => {
        return a.id - b.id;
    })


    console.log(usersActive)
    
    console.log(usersDesactive.length)

    console.log(someUsersActive)

    console.log(orderedArray)