const arrayNeyear = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]



arrayNeyear.forEach((value,index,array) =>{
    if(value % 2 === 0){
        value = "X"
    }

    arrayNeyear[index] = value

} );

console.log(arrayNeyear)