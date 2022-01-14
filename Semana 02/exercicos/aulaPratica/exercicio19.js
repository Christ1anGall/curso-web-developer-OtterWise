let array01 = [' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt ']


let arraySplit = []
let arrayJoin = ["","","",""]

for(let index = 0; index < array01.length; index++){
    arraySplit[index] = array01[index].split("")  
    
    for (let index1 = 0; index1 < arraySplit[index].length; index1++) {
    
        switch (arraySplit[index][index1]) {
            case "1" :
                arraySplit[index][index1] = "i"
                break;
            case "3" :
                arraySplit[index][index1] = "e"
                break;
            case "4" :
                arraySplit[index][index1] = "a"
                break;
            case "5" :
                arraySplit[index][index1] = "s"
                break;
            case "0" :
                arraySplit[index][index1] = "o"
                break;
            case " " || "":
                arraySplit[index][index1] = null
                break;
        }

    
    }


   for(let index2 = 0; index2 < arraySplit[index].length; index2++){

      if( arraySplit[index][index2] !== null){
        arrayJoin[index] += arraySplit[index][index2]
      }
     
   }
  
}

console.log(arrayJoin)






