const name = "joao";
const age = 27;

const updateDate = "data de atualizacao";

const person = {
  name: "joao",
  age: 27,
  address: {
    street: "nome da minha rua",
    number: 19023,
  },
 
  "data de criacao": "14/12/2021",
  [updateDate]: "14/12/2021",
  competencias: ["javascript", "css", "html"],
};

console.log(person.address.street);
console.log(person["data de criacao"]);
console.log(person.competencias[0]);

person.name = "pedro";

console.log(person);



const user =  {
  name: "Christian",
  projects: {
      name: "projeto 1", 
      start: "14/12/2021" , 
      active: true,
  },
};



console.log(user.name);