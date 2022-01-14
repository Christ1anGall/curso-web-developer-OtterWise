let entryData = {nome: 'Analu dos santos baptista', cpf: '14776213931', telefone: '8328008258'}




function cpfFormat(entryData){

   let cpfTratament = []

   cpfTratament = entryData.cpf.split("")

   return `${cpfTratament[0]}${cpfTratament[1]}${cpfTratament[2]}.${+cpfTratament[3]}${cpfTratament[4]}${cpfTratament[5]}.${cpfTratament[6]}${cpfTratament[7]}${cpfTratament[8]}-${cpfTratament[9]}${cpfTratament[10]}`

    }

    
   


function phoneFormat(entryData){

    let telefoneTratament = []
 
    telefoneTratament = entryData.telefone.split("")

    if(entryData.telefone.lenght = 11){
 
    return `(${telefoneTratament[0]}${telefoneTratament[1]})${telefoneTratament[2]}${+telefoneTratament[3]}${telefoneTratament[4]}${telefoneTratament[5]}-${telefoneTratament[6]}${telefoneTratament[7]}${telefoneTratament[8]}${telefoneTratament[9]}`
 
     }

     else{

        return `(${telefoneTratament[0]}${telefoneTratament[1]})${telefoneTratament[2]}${+telefoneTratament[3]}${telefoneTratament[4]}${telefoneTratament[5]}${telefoneTratament[6]}-${telefoneTratament[7]}${telefoneTratament[8]}${telefoneTratament[9]}${telefoneTratament[10]}`
     }


    }
  





console.log(`
${entryData.nome}
${cpfFormat(entryData)}
${phoneFormat(entryData)}
`)


//for(index = 0; index < entryData.cpf.length; index++){