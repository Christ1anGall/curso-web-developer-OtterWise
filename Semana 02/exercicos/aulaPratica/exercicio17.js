array01 = [
{ name: 'Marília', age: 26, job: 'Dev' },
{ name: 'Juca', age: 21, job: 'RH' },
{ name: 'Flávia', age: 30, job: 'Financeiro' },
{ name: 'Sérgio', age: 24, job: 'Dev' },
]


for (let index = 0; index < array01.length; index++) {
    if (array01[index].job == "Dev" || array01[index].job == "dev" ){
    console.log(`${array01[index].name} é dev.`)
}
    else{

        console.log(`${array01[index].name} não é dev.`)
    }
}
