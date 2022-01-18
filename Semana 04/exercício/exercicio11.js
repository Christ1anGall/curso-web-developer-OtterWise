const arrayWords = ['  h3ll0 w0rld', '  w3b d3v3l0p3r  ', '0tterw1s3', 'j4v4scr1pt ']

const newWords = arrayWords.map((string)=>{
  return string
    .replaceAll(1,"i")
    .replaceAll(3,"e")
    .replaceAll(4,"a")
    .replaceAll(5,"s")
    .replaceAll(0,"o")
    .trim()
  
})

console.log(newWords)
