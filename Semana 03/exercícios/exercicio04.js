

let array = ['angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']


function namesShow(names) {


let namesShow2 = []

for (let index = 0; index < names.length; index++) {

   namesShow2[index] = names[index]
   
}

return namesShow2

}


console.log(`${namesShow(array)}`)