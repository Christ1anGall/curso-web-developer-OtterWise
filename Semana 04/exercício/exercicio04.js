const arrayNote = [6, 8, 7]

let newArray = arrayNote.reduce(function(primeiro,valoratual){
return (primeiro + valoratual)/arrayNote.length
},0)

console.log(Math.floor(newArray))
