const arrayOne = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]

const arrayTwo = [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255 ]



const newArray3 = arrayOne.map((value1)=>{
    
    return arrayTwo.filter((value2)=>{

       return  value2 === value1

    
        
    })
    
  
})

let finalArray = newArray3.filter((value)=>{
    return value > 10 || value < -1
})


console.log(finalArray)

