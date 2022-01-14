let nameShearching = "Regina"


let array13 = ["Juliana", "Pedro", "Regina", "João", "Patrícia", "Gabriel", "Carlos", "Carla"]
let arrayName

for (let index = 0; index < array13.length; index++){
    arrayName = array13[index]

    if(nameShearching == arrayName ){
        console.log(`O nome ${nameShearching} existe no Array`)
    }
}

