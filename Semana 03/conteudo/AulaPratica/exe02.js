

 const superUser = {
    name: "Christian",
    age: 29,
  };


 const checkUserAge = ({age}) => {
     return age >= 18 ? "Maior de idade"
     : "Menor de idade"
  };


console.log(checkUserAge(superUser));
