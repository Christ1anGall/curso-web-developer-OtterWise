import React, { useState } from "react";
import { useEffect } from "react";
import { listPets } from "../services/pets";

export default function ProtectedPage() {
  const [pet, setPet] = useState(null);

  const id = JSON.parse(localStorage.user).id;

  useEffect(() => {
    const request = async () => {
      try {
        const response = await listPets(id);
        setPet(response.data.pets);
        
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, []);

  if (id && !pet) return <p>Cadastre um Pet</p>;

  console.log(pet);

  if (pet)
    return (
      <div>
        <p>você tem {pet.length} pets cadastrados </p>

        {pet.map((pets) => <div>   
          
          <p><img src={pets.url} alt="" /> </p>
          <p>Nome: {pets.name} </p>
          <p>Raça: {pets.breed} </p>
          <p>Idade: {pets.age} </p>
          <p>Especie: {pets.species} </p>
          
        </div>)}
        
      </div>
    );
}
