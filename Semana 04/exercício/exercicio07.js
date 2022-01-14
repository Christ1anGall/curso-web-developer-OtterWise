const schoolNotes = [
     { nome:"name" , notas: [0,0,2]}
     ,
     {  nome:"name2" , notas: [10,0,2]}
     ,
     { nome:"name3" , notas: [0,0,0]}
     ,
     { nome:"name5" , notas: [0,0,0]}
     ,
     { nome:"name4" , notas: [0,0,0]}
     ,
     { nome:"name6" , notas: [0,0,0]}
    ]


    const student = schoolNotes.filter(user => {
        return user.notas[0] == 0 && user.notas[1] == 0 && user.notas[2] == 0 
    })

    console.log(student)