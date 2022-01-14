/*
Crie um algoritmo que tem como entrada um objeto e imprime no console os nomes dos projetos ativos do usuário.
user = { 
    name: "Juca", 
    projects: [
        { name: "Projeto 1",  start: "01/02/2021", active: true}, 
        {name: "Projeto 2", start: "03/03/2021", active: false},
        {name: "Projeto 3", start: "10/08/2021", active: true},
        {name: "Projeto 4", start: "20/08/2021", active: false},
        {name: "Projeto 5", start: "18/10/2021", active: true}
    ]
}
*/


const person = {
    name: "Juca", 
    projects: 
        [
        {name: "Projeto 1", start: "01/02/2021", active: true},
        {name: "Projeto 2", start: "03/03/2021", active: false},
        {name: "Projeto 3", start: "10/08/2021", active: true},
        {name: "Projeto 4", start: "20/08/2021", active: false},
        {name: "Projeto 5", start: "18/10/2021", active: true}
        ]
    

};


for (let index = 0; index < person.projects.length; index++) {
    const element = person.projects[index];
   if (element.active == true){
       console.log(element.name)
   }

    

}


