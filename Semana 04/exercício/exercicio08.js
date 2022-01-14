const arrayNomes = ["Juliana", "Pedro", "Regina", "João", "Patrícia", "Gabriel", "Carlos", "Carla"]
const nameInArray = "Carla"


const student = arrayNomes.some(user => {
   return user === nameInArray})


if(student) {
    console.log("o nome existe") }
    else{
    console.log("o nome não existe")}
